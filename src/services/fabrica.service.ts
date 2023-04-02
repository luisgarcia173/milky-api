import { FabricaModel } from '../models/fabrica.model';

export async function createFabrica(name: string, distancia: number) {
  try {
    const fabrica = await FabricaModel.create({ name, distancia });
    return fabrica;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function listFabrica() {
  try {
    const fabricas = await FabricaModel.find();
    return fabricas;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function getFabrica(id: string) {
  try {
    const fabrica = await FabricaModel.findById(id);
    return fabrica;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function updateFabrica(id: string, name: string, distancia: number) {
  try {
    const fabrica = await FabricaModel.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        distancia: distancia
      },
      { upsert: true }
    );
    return fabrica;
  } catch (e: any) {
    throw new Error(e);
  }
};

export async function deleteFabrica(id: string) {
  try {
    await FabricaModel.findByIdAndDelete({ _id: id });
  } catch (e: any) {
    throw new Error(e);
  }
};