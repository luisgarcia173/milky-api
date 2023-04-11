import { Router } from 'express';
import { validateResource } from './../middlewares/validateResource';
import { createFazendaSchema } from '../schemas/fazenda.schema';
import {
  createFazendaHandler,
  deleteFazendaHandler,
  getFazendaHandler,
  listFazendaHandler,
  updateFazendaHandler,
} from '../controllers/fazenda.controller';

const router = Router();

// FIXME manter em dialeto

// Fazenda 
router.post(
  '/api/fazendeiro/:fazendeiro/fazenda',
  validateResource(createFazendaSchema),
  createFazendaHandler
);
router.get('/api/fazenda', listFazendaHandler);
router.get('/api/fazenda/:id', getFazendaHandler);
router.put(
  '/api/fazenda/:id',
  validateResource(createFazendaSchema),
  updateFazendaHandler
);
router.delete('/api/fazenda/:id', deleteFazendaHandler);

export { router as fazendaRouter };
