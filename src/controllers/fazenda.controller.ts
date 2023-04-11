import { Request, Response } from 'express';
import {
  createFazenda,
  deleteFazenda,
  getFazenda,
  listFazenda,
  updateFazenda,
} from '../services/fazenda.service';

export async function createFazendaHandler(req: Request, res: Response) {
  try {
    const { fazendeiro } = req.params; // FIXME especificar que é o ID
    const { name } = req.body; // FIXME usar o body do zod (ja validado)
    const fazenda = await createFazenda(fazendeiro, name);
    return res.status(201).send(fazenda);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}

export async function listFazendaHandler(req: Request, res: Response) {
  try {
    const fazendas = await listFazenda();
    return res.status(200).send(fazendas);
  } catch (e: any) { //FIXME padronizacao de erro via middleware
    console.error(e);
    return res.status(404).send(e.message); //FIXME validar regra de negocio dentro do try/catch
  }
}

export async function getFazendaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const fazenda = await getFazenda(id);
    return res.status(200).send(fazenda);
  } catch (e: any) { //FIXME tipar o erro
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function updateFazendaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, fazendeiro } = req.body;
    await updateFazenda(id, name, fazendeiro);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function deleteFazendaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteFazenda(id);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}
