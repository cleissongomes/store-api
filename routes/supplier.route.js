import express from 'express';
import SupplierController from '../controllers/supplier.controller.js';

const router = express.Router();

router.post('/', SupplierController.createSupplier);
router.get('/', SupplierController.getSuppliers);

export default router;
