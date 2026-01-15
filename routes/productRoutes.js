import express from 'express'
import { 
  getProducts, 
  getProduct, 
  createProductHandler, 
  updateProductHandler, 
  deleteProductHandler 
} from '../controllers/productController.js'

const router = express.Router()

// CRUD Routes
router.get('/', getProducts)              // GET /api/products - Get all products
router.get('/:id', getProduct)            // GET /api/products/:id - Get product by ID
router.post('/', createProductHandler)     // POST /api/products - Create product
router.put('/:id', updateProductHandler)  // PUT /api/products/:id - Update product
router.delete('/:id', deleteProductHandler) // DELETE /api/products/:id - Delete product

export default router
