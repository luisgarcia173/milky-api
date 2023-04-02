import { Router } from 'express';
import { validateResource } from './../middlewares/validateResource';
import { createFabricaSchema } from '../schemas/fabrica.schema';
import {
  createFabricaHandler,
  deleteFabricaHandler,
  getFabricaHandler,
  listFabricaHandler,
  updateFabricaHandler,
} from '../controllers/fabrica.controller';

const router = Router();

// Fabrica
router.post(
  '/api/fabrica',
  validateResource(createFabricaSchema),
  createFabricaHandler
);
router.get('/api/fabrica', listFabricaHandler);
router.get('/api/fabrica/:id', getFabricaHandler);
router.put(
  '/api/fabrica/:id',
  validateResource(createFabricaSchema),
  updateFabricaHandler
);
router.delete('/api/fabrica/:id', deleteFabricaHandler);

export { router as fabricaRouter };
