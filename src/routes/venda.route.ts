import { Router } from 'express';
import {
  createVendaHandler,
  deleteVendaHandler,
  getVendaHandler,
  listVendaHandler,
  updateVendaHandler,
} from '../controllers/venda.controller';
import { createVendaSchema } from '../schemas/venda.schema';
import { validateResource } from './../middlewares/validateResource';

const router = Router();

// Venda
router.post(
  '/api/fazenda/:fazenda/venda',
  validateResource(createVendaSchema),
  createVendaHandler
);
router.get('/api/venda', listVendaHandler);
router.get('/api/venda/:id', getVendaHandler);
router.put(
  '/api/venda/:id',
  validateResource(createVendaSchema),
  updateVendaHandler
);
router.delete('/api/venda/:id', deleteVendaHandler);

export { router as vendaRouter };
