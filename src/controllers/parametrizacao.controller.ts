import { Request, Response } from 'express';
import {
  createParametrizacao,
  deleteParametrizacao,
  getParametrizacao,
  listParametrizacao,
  updateParametrizacao,
} from '../services/parametrizacao.service';

export async function createParametrizacaoHandler(req: Request, res: Response) {
  try {
    const { precoBase, bonusProducao } = req.body;
    const parametrizacao = await createParametrizacao(precoBase, bonusProducao);
    return res.status(201).send(parametrizacao);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}

export async function listParametrizacaoHandler(req: Request, res: Response) {
  try {
    const parametrizacoes = await listParametrizacao();
    return res.status(200).send(parametrizacoes);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function getParametrizacaoHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const parametrizacao = await getParametrizacao(id);
    return res.status(200).send(parametrizacao);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function updateParametrizacaoHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { precoBase, bonusProducao } = req.body;
    await updateParametrizacao(id, precoBase, bonusProducao);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function deleteParametrizacaoHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteParametrizacao(id);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}
