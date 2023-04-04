import { FabricaModel } from '../models/fabrica.model';
import { ParametrizacaoModel } from '../models/parametrizacao.model';
import { ProducaoModel } from '../models/producao.model';
import { VendaModel } from '../models/venda.model';

export async function createVenda(fazenda: string, fabrica: string, parametrizacao: string, quantidade: number) {
  try {
    const valorFinal = await calcularPreco(fazenda, fabrica, parametrizacao, quantidade);
    const venda = await VendaModel.create({fazenda, fabrica, parametrizacao, quantidade, valorFinal});
    return venda;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function listVenda() {
  try {
    const vendas = await VendaModel.find();
    return vendas;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getVenda(id: string) {
  try {
    const venda = await VendaModel.findById(id);
    return venda;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function updateVenda(id: string, fazenda: string, fabrica: string, parametrizacao: string, quantidade: number) {
  try {
    const valorFinal = await calcularPreco(fazenda, fabrica, parametrizacao, quantidade);
    const venda = await VendaModel.findByIdAndUpdate(
      { _id: id },
      { 
        fazenda: fazenda, 
        fabrica: fabrica, 
        parametrizacao: parametrizacao, 
        quantidade: quantidade, 
        valorFinal: valorFinal
      },
      { upsert: true }
    );
    return venda;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function deleteVenda(id: string) {
  try {
    await VendaModel.findByIdAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};

async function calcularPreco(fazendaId: string, fabricaId: string, parametrizacaoId: string, quantidadeVendido: number){
  try {
    //Preço = (Volume do mês * Preço base) - (Custo por KM * distância da fazenda até a fábrica) + (Bônus p/ produção * litros entregues no mês)
    let preco: number = 0;

    // get producao by fazenda by month
    const volumeMes = await getProducaoMes(fazendaId);

    // get parametrizacao preco base 
    const parametrizacao = await ParametrizacaoModel.findById(parametrizacaoId);
    const { valor: precoBase, custoKmPadrao, custoKmAdicional } = parametrizacao.precoBase;
    const { quantidade: quantidadeBonus, valor: valorBonus } = parametrizacao.bonusProducao;

    // STEP 1: (Volume do mês || QtVendido * Preço base)
    if (!volumeMes || volumeMes < 1) {
      throw new Error('Volume produzido mês não é suficiente para calcular preço.');
    }
    if (quantidadeVendido > volumeMes) {
      throw new Error('Volume produzido mês inferior a quantidade vendida.');
    }
    preco = quantidadeVendido * precoBase;

    // get fabrica km
    const fabrica = await FabricaModel.findById(fabricaId);
    let custoKM = custoKmPadrao; // <=50 KM
    
    if (fabrica.distancia > 50) { // >50 KM
      custoKM = custoKmAdicional;
    }

    // STEP 2: (Custo por KM * distância da fazenda até a fábrica)
    preco = preco - (custoKM * fabrica.distancia);
    
    // get venda by fazenda by fabrica
    const vendaMes = await getVendaMes(fazendaId, fabricaId);

    if (vendaMes >= quantidadeBonus) {

      // STEP 3: (Bônus p/ produção * litros entregues no mês)
      preco = preco + (valorBonus * vendaMes);
    }

    // Double check
    console.log({
      volumeMes: volumeMes,
      precoBase: precoBase,
      custoKM: custoKM,
      parametrizacao: parametrizacao.precoBase,
      distancia: fabrica.distancia,
      vendaMes: vendaMes,
      valorBonus: valorBonus,
      preco: preco
    });

    return preco;
  } catch (e: any) {
    throw new Error(e);
  }
};

async function getProducaoMes(fazendaId: string) {
  const producoes = await ProducaoModel.aggregate([
    {
      '$group': {
        '_id': 
        { 
          'fazenda': '$fazenda',
          'month': { '$month': '$createdAt' }, 
          'year': { '$year': '$createdAt' } 
        },
        'total': { '$sum': '$quantidade' }
      }
    }
  ]).exec();
  const currentMonth = (new Date().getMonth()) + 1; // 1 - 12
  const currentYear = (new Date().getFullYear());
  const [ producaoMes ] = producoes
    .filter(producao => producao._id.fazenda.toString() === fazendaId)
    .filter(producao => producao._id.year === currentYear)
    .filter(producao => producao._id.month === currentMonth);

  return (producaoMes === undefined) ? 0 : producaoMes['total'];
}

async function getVendaMes(fazendaId: string, fabricaId: string) {
  const vendas = await VendaModel.aggregate([
    {
      '$group': {
        '_id': 
        { 
          'fazenda': '$fazenda',
          'fabrica': '$fabrica',
          'month': { '$month': '$createdAt' }, 
          'year': { '$year': '$createdAt' } 
        },
        'total': { '$sum': '$quantidade' }
      }
    }
  ]).exec();
  const currentMonth = (new Date().getMonth()) + 1; // 1 - 12
  const currentYear = (new Date().getFullYear());
  const [ vendaMes ] = vendas
    .filter(venda => venda._id.fazenda.toString() === fazendaId)
    .filter(venda => venda._id.fabrica.toString() === fabricaId)
    .filter(venda => venda._id.year === currentYear)
    .filter(venda => venda._id.month === currentMonth);
  
  return (vendaMes === undefined) ? 0 : vendaMes['total'];
}