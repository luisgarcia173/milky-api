import express from 'express';
import { router } from './routes';
import { fazendeiroRouter } from './routes/fazendeiro.route';
import { fazendaRouter } from './routes/fazenda.route';
import { fabricaRouter } from './routes/fabrica.route';
import { producaoRouter } from './routes/producao.route';

const app = express();

// Parse request/response object
app.use(express.json());

// App routes
app.use(router);
app.use(fazendeiroRouter);
app.use(fazendaRouter);
app.use(fabricaRouter);
app.use(producaoRouter);

export { app };