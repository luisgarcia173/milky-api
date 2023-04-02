import { Router } from 'express';
import { createParametrizacaoSchema } from '../schemas/parametrizacao.schema';
import { validateResource } from './../middlewares/validateResource';
import {
  createParametrizacaoHandler,
  deleteParametrizacaoHandler,
  getParametrizacaoHandler,
  listParametrizacaoHandler,
  updateParametrizacaoHandler,
} from '../controllers/parametrizacao.controller';

const router = Router();

// Parametrizacao
router.post(
  '/api/parametrizacao',
  validateResource(createParametrizacaoSchema),
  createParametrizacaoHandler
);
router.get('/api/parametrizacao', listParametrizacaoHandler);
router.get('/api/parametrizacao/:id', getParametrizacaoHandler);
router.put(
  '/api/parametrizacao/:id',
  validateResource(createParametrizacaoSchema),
  updateParametrizacaoHandler
);
router.delete('/api/parametrizacao/:id', deleteParametrizacaoHandler);

export { router as parametrizacaoRouter };
