import { Request, Response } from 'express';
import {
  getTotalVendidoBy,
  getTotalVendidoMesBy,
  getVolumeProduzidoDiaBy,
} from '../services/report.service';

export async function getVolumeProduzidoDiaHandler(
  req: Request,
  res: Response
) {
  try {
    const { fazenda, mes } = req.params;
    const reportVolume = await getVolumeProduzidoDiaBy(fazenda, +mes);
    return res.status(200).send(reportVolume);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function getTotalVendidoHandler(req: Request, res: Response) {
  try {
    const { fazenda, mes } = req.params;
    const reportVendaMes = await getTotalVendidoBy(fazenda, +mes);
    return res.status(200).send(reportVendaMes);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}

export async function getTotalVendidoMesHandler(req: Request, res: Response) {
  try {
    const { fazenda, ano } = req.params;
    const reportVendaAno = await getTotalVendidoMesBy(fazenda, +ano);
    return res.status(200).send(reportVendaAno);
  } catch (e: any) {
    console.error(e);
    return res.status(404).send(e.message);
  }
}
