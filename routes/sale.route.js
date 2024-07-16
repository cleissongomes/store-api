import express from 'express';
import SaleController from '../controllers/sale.controller.js';

const router = express.Router();

router.post('/', SaleController.createSale);
router.get('/', SaleController.getSales);

export default router;
