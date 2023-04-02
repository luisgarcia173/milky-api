import { Router } from 'express';
import { createProducaoSchema } from '../schemas/producao.schema';
import { validateResource } from './../middlewares/validateResource';
import { createProducaoHandler, deleteProducaoHandler, getProducaoHandler, listProducaoHandler, updateProducaoHandler } from '../controllers/producao.controller';

const router = Router();

// Producao
router.post(
  '/api/fazenda/:fazenda/producao',
  validateResource(createProducaoSchema),
  createProducaoHandler
);
router.get('/api/producao', listProducaoHandler);
router.get('/api/producao/:id', getProducaoHandler);
router.put(
  '/api/producao/:id',
  validateResource(createProducaoSchema),
  updateProducaoHandler
);
router.delete('/api/producao/:id', deleteProducaoHandler);

export { router as producaoRouter };

