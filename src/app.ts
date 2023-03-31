import express from 'express';
import { router } from './routes';
import { fazendeiroRouter } from './routes/fazendeiro.route';

const app = express();

// Parse request/response object
app.use(express.json());

// App routes
app.use(router);
app.use(fazendeiroRouter);

export { app };