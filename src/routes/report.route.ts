import { Router } from 'express';
import { getTotalVendidoHandler, getTotalVendidoMesHandler, getVolumeProduzidoDiaHandler } from '../controllers/report.controller';

const router = Router();

// Report
router.get('/api/report/fazenda/:fazenda/volume/mes/:mes', getVolumeProduzidoDiaHandler);
router.get('/api/report/fazenda/:fazenda/venda/mes/:mes', getTotalVendidoHandler);
router.get('/api/report/fazenda/:fazenda/venda/ano/:ano', getTotalVendidoMesHandler);

export { router as reportRouter };

