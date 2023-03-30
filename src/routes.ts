import { Router } from 'express';

const router  = Router();

router.get('/healthcheck', (req, res) => res.sendStatus(200));


export { router };