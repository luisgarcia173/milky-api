import { Request, Response } from 'express';
import {
  createFabrica,
  deleteFabrica,
  getFabrica,
  listFabrica,
  updateFabrica,
} from '../services/fabrica.service';

export async function createFabricaHandler(req: Request, res: Response) {
  try {
    const { name, distancia } = req.body;
    const fabrica = await createFabrica(name, distancia);
    return res.status(201).send(fabrica);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}

export async function listFabricaHandler(req: Request, res: Response) {
  try {
    const fabricas = await listFabrica();
    return res.status(200).send(fabricas);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function getFabricaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const fabrica = await getFabrica(id);
    return res.status(200).send(fabrica);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function updateFabricaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, distancia } = req.body;
    await updateFabrica(id, name, distancia);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function deleteFabricaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteFabrica(id);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}
