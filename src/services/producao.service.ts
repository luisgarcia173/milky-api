import { ProducaoModel } from '../models/producao.model';

export async function createProducao(fazenda: string, quantidade: number) {
  try {
    const producao = await ProducaoModel.create({fazenda, quantidade});
    return producao;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function listProducao() {
  try {
    const producoes = await ProducaoModel.find();
    return producoes;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getProducao(id: string) {
  try {
    const producao = await ProducaoModel.findById(id);
    return producao;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function updateProducao(id: string, fazenda: string, quantidade: number) {
  try {
    const producao = await ProducaoModel.findByIdAndUpdate(
      { _id: id },
      { 
        fazenda: fazenda,
        quantidade: quantidade
      },
      { upsert: true }
    );
    return producao;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function deleteProducao(id: string) {
  try {
    await ProducaoModel.findByIdAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};