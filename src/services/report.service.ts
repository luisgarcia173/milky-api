import { ProducaoModel } from '../models/producao.model';
import { VendaModel } from '../models/venda.model';

export async function getVolumeProduzidoDiaBy(fazendaId: string, mes: number) {
  try {
    const producoes = await ProducaoModel.aggregate([
      {
        '$group': {
          '_id': 
          { 
            'fazenda': '$fazenda',
            'day': { '$dayOfMonth': '$createdAt' }, 
            'month': { '$month': '$createdAt' }, 
            'year': { '$year': '$createdAt' }, 
          },
          'total': { '$sum': '$quantidade' }
        }
      }
    ]).exec();
    const currentYear = (new Date().getFullYear());
    let totalGeral = 0;
    const producoesMes = producoes
      .filter(producao => producao._id.fazenda.toString() === fazendaId)
      .filter(producao => producao._id.year === currentYear)
      .filter(producao => producao._id.month === mes)
      .map(producao => {
        totalGeral = totalGeral + producao.total;
        return {
          dia: producao._id.day,
          volume: producao.total
        }
      });
    
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), mes, 0).getDate();

    const mediaDia = totalGeral / lastDayOfMonth;
    const mediaDiaProduzido = totalGeral / producoesMes.length;
    
    return {
      fazenda: fazendaId,
      mesReferencia: mes,
      diasProducaoMes: (producoesMes === undefined) ? 0 : producoesMes.length,
      producaoMediaDiaProduzido: mediaDiaProduzido,
      producaoMediaMesCompleto: mediaDia,
      producao: (producoesMes === undefined) ? 0 : producoesMes
    };
   
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getTotalVendidoBy(fazendaId: string, mes: number) {
  try {
    const vendas = await VendaModel.aggregate([
      {
        '$group': {
          '_id': 
          { 
            'fazenda': '$fazenda',
            'month': { '$month': '$createdAt' }, 
            'year': { '$year': '$createdAt' }, 
          },
          'totalVendido': { '$sum': '$quantidade' },
          'totalFaturado': { '$sum': '$valorFinal' }
        }
      }
    ]).exec();

    const currentYear = (new Date().getFullYear());
    const [ vendaMes ] = vendas
    .filter(venda => venda._id.fazenda.toString() === fazendaId)
    .filter(venda => venda._id.year === currentYear)
    .filter(venda => venda._id.month === mes);

    // Apresentar preco no formato BR(,) / US(.)
    return {
      fazenda: fazendaId,
      mesReferencia: mes,
      totalVendido: { 
        quantidade: vendaMes.totalVendido,
        faturado: {
          'pt-BR': new Intl.NumberFormat('pt-BR').format(vendaMes.totalFaturado),
          'en-US': new Intl.NumberFormat('en-US').format(vendaMes.totalFaturado)
        }
      }
    };

  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getTotalVendidoMesBy(fazendaId: string, ano: number) {
  try {
    const vendas = await VendaModel.aggregate([
      {
        '$group': {
          '_id': 
          { 
            'fazenda': '$fazenda',
            'month': { '$month': '$createdAt' }, 
            'year': { '$year': '$createdAt' }, 
          },
          'totalVendido': { '$sum': '$quantidade' },
          'totalFaturado': { '$sum': '$valorFinal' }
        }
      }
    ]).exec();

    const vendasAno = vendas
      .filter(venda => venda._id.fazenda.toString() === fazendaId)
      .filter(venda => venda._id.year === ano)
      .map(venda => {
        return { 
          mes: venda._id.month,
          quantidade: venda.totalVendido,
          faturado: {
            'pt-BR': new Intl.NumberFormat('pt-BR').format(venda.totalFaturado),
            'en-US': new Intl.NumberFormat('en-US').format(venda.totalFaturado)
          }
        }
      });

    // Apresentar preco no formato BR(,) / US(.)
    return {
      fazenda: fazendaId,
      anoReferencia: ano,
      totalVendido: vendasAno
    };
    
  } catch (e: any) {
    throw new Error(e);
  }
};

