import { Request, Response } from 'express';
import {
  createFazendeiro,
  deleteFazendeiro,
  getFazendeiro,
  listFazendeiro,
  updateFazendeiro,
} from '../services/fazendeiro.service';

export async function createFazendeiroHandler(req: Request, res: Response) {
  try {
    const fazendeiro = await createFazendeiro(req.body);
    return res.status(201).send(fazendeiro);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}

export async function listFazendeiroHandler(req: Request, res: Response) {
  try {
    const fazendeiros = await listFazendeiro();
    return res.status(200).send(fazendeiros);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function getFazendeiroHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const fazendeiro = await getFazendeiro(id);
    return res.status(200).send(fazendeiro);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function updateFazendeiroHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await updateFazendeiro(id, name);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function deleteFazendeiroHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteFazendeiro(id);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}
