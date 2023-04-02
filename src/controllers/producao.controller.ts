import { Request, Response } from 'express';
import { createProducao } from '../services/producao.service';
import { listProducao } from '../services/producao.service';
import { getProducao } from '../services/producao.service';
import { updateProducao } from '../services/producao.service';
import { deleteProducao } from '../services/producao.service';

export async function createProducaoHandler(
  req: Request, 
  res: Response
) {
  try {
    const { fazenda } = req.params;
    const { quantidade } = req.body;
    const producao = await createProducao(fazenda, quantidade);
    return res.status(201).send(producao);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
};

export async function listProducaoHandler(
  req: Request, 
  res: Response
) {
  try {
    const producoes = await listProducao();
    return res.status(200).send(producoes);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
};

export async function getProducaoHandler(
  req: Request, 
  res: Response
) {
  try {
    const { id } = req.params;
    const producao = await getProducao(id);
    return res.status(200).send(producao);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
};

export async function updateProducaoHandler(
  req: Request, 
  res: Response
) {
  try {
    const { id } = req.params;
    const { fazenda, quantidade } = req.body;
    await updateProducao(id, fazenda, quantidade);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
};

export async function deleteProducaoHandler(
  req: Request, 
  res: Response
) {
  try {
    const { id } = req.params;
    await deleteProducao(id);
    
    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
};