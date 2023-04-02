import { Request, Response } from 'express';
import {
  createVenda,
  deleteVenda,
  getVenda,
  listVenda,
  updateVenda,
} from '../services/venda.service';

export async function createVendaHandler(req: Request, res: Response) {
  try {
    const { fazenda } = req.params;
    const { fabrica, parametrizacao, quantidade } = req.body;
    const venda = await createVenda(
      fazenda,
      fabrica,
      parametrizacao,
      quantidade
    );
    return res.status(201).send(venda);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
}

export async function listVendaHandler(req: Request, res: Response) {
  try {
    const vendas = await listVenda();
    return res.status(200).send(vendas);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function getVendaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const venda = await getVenda(id);
    return res.status(200).send(venda);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function updateVendaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { fazenda, fabrica, parametrizacao, quantidade } = req.body;
    await updateVenda(id, fazenda, fabrica, parametrizacao, quantidade);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function deleteVendaHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteVenda(id);

    return res.status(204).json();
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}
