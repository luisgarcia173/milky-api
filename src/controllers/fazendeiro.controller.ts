import { Request, Response } from 'express';
import { createFazendeiro } from '../services/fazendeiro.service';

export async function createFazendeiroHandler(
  req: Request, 
  res: Response
) {
  try {
    const fazendeiro = await createFazendeiro(req.body);
    return res.status(201).send(fazendeiro);
  } catch (e: any) {
    console.error(e);
    return res.status(409).send(e.message);
  }
};