import { FazendeiroModel } from '../models/fazendeiro.model';

export async function createFazendeiro(name: string) {
  try {
    const fazendeiro = await FazendeiroModel.create(name);
    return fazendeiro;
  } catch (e: any) {
    throw new Error(e);
  }
};