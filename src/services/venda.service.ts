import { FazendaModel } from '../models/fazenda.model';
import { VendaModel } from '../models/venda.model';

export async function createVenda(fazenda: string, fabrica: string, parametrizacao: string, quantidade: number) {
  try {
    const valorFinal = 0; //FIXME deve ser calculado usando parametrizacao
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
    const valorFinal = 0; //FIXME deve ser calculado usando parametrizacao
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