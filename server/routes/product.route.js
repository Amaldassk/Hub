import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/product.controller.js';
const router = express.Router();

router.post('/', createProduct);

router.get('/:id', getProduct);
router.get('/', getAllProducts);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);


export default router;