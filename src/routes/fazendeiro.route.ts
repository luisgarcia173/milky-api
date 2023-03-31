import { Router } from 'express';
import {
  createFazendeiroHandler,
  deleteFazendeiroHandler,
  getFazendeiroHandler,
  listFazendeiroHandler,
  updateFazendeiroHandler,
} from './../controllers/fazendeiro.controller';
import { validateResource } from './../middlewares/validateResource';
import { createFazendeiroSchema } from './../schemas/fazendeiro.schema';

const router = Router();

// Fazendeiro
router.post(
  '/api/fazendeiro',
  validateResource(createFazendeiroSchema),
  createFazendeiroHandler
);
router.get('/api/fazendeiro', listFazendeiroHandler);
router.get('/api/fazendeiro/:id', getFazendeiroHandler);
router.put(
  '/api/fazendeiro/:id',
  validateResource(createFazendeiroSchema),
  updateFazendeiroHandler
);
router.delete('/api/fazendeiro/:id', deleteFazendeiroHandler);

export { router as fazendeiroRouter };
