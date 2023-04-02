import { FabricaModel } from '../models/fabrica.model';
import { FazendaModel } from '../models/fazenda.model';
import { BonusProducaoInput, ParametrizacaoModel, PrecoBaseInput } from '../models/parametrizacao.model';

export async function createParametrizacao(precoBase: PrecoBaseInput, bonusProducao: BonusProducaoInput) {
  try {
    const parametrizacao = await ParametrizacaoModel.create({ precoBase, bonusProducao });
    return parametrizacao;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function listParametrizacao() {
  try {
    const parametrizacoes = await ParametrizacaoModel.find();
    return parametrizacoes;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getParametrizacao(id: string) {
  try {
    const parametrizacao = await ParametrizacaoModel.findById(id);
    return parametrizacao;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function updateParametrizacao(id: string, precoBase: PrecoBaseInput, bonusProducao: BonusProducaoInput) {
  try {
    const parametrizacao = await ParametrizacaoModel.findByIdAndUpdate(
      { _id: id },
      {
        precoBase: precoBase,
        bonusProducao: bonusProducao
      },
      { upsert: true }
    );
    return parametrizacao;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function deleteParametrizacao(id: string) {
  try {
    await ParametrizacaoModel.findByIdAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};