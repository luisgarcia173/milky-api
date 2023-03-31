import { Router } from 'express';
import { createFazendeiroHandler, deleteFazendeiroHandler, getFazendeiroHandler, listFazendeiroHandler, updateFazendeiroHandler } from './controllers/fazendeiro.controller';
import { validateResource } from './middlewares/validateResource';
import { createFazendeiroSchema } from './schemas/fazendeiro.schema';

const router  = Router();

//curl http://localhost:3000/healthcheck
router.get('/healthcheck', (req, res) => res.sendStatus(200));

export { router };