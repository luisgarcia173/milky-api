import { FazendeiroModel } from '../models/fazendeiro.model';

export async function createFazendeiro(name: string) {
  try {
    const fazendeiro = await FazendeiroModel.create(name);
    return fazendeiro;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function listFazendeiro() {
  try {
    const fazendeiros = await FazendeiroModel.find();
    return fazendeiros;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getFazendeiro(id: string) {
  try {
    const fazendeiro = await FazendeiroModel.findById(id);
    return fazendeiro;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function updateFazendeiro(id: string, name: string) {
  try {
    const fazendeiro = await FazendeiroModel.findByIdAndUpdate(
      { _id: id },
      { name: name },
      { upsert: true }
    );
    return fazendeiro;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function deleteFazendeiro(id: string) {
  try {
    await FazendeiroModel.findByIdAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};