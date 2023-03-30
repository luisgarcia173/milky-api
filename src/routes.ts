import { Router } from 'express';

const router  = Router();

//curl http://localhost:3000/healthcheck
router.get('/healthcheck', (req, res) => res.sendStatus(200));


export { router };