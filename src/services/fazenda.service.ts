import { FazendaModel } from '../models/fazenda.model';

export async function createFazenda(fazendeiro: string, name: string) {
  try {
    const fazenda = await FazendaModel.create({fazendeiro, name});
    return fazenda;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function listFazenda() {
  try {
    const fazendas = await FazendaModel.find();
    return fazendas;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getFazenda(id: string) {
  try {
    const fazenda = await FazendaModel.findById(id);
    return fazenda;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function updateFazenda(id: string, name: string, fazendeiro: string) {
  try {
    const fazenda = await FazendaModel.findByIdAndUpdate(
      { _id: id },
      { 
        name: name,
        fazendeiro: fazendeiro
      },
      { upsert: true }
    );
    return fazenda;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function deleteFazenda(id: string) {
  try {
    await FazendaModel.findByIdAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};