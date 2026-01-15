import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../services/productService.js'

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts()
    res.json({
      data: products,
      status: 'success',
      count: products.length
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching products',
      status: 'error'
    })
  }
}

// Get product by ID
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await getProductById(id)
    
    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
        status: 'error'
      })
    }
    
    res.json({
      data: product,
      status: 'success'
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching product',
      status: 'error'
    })
  }
}

// Create product
export const createProductHandler = async (req, res) => {
  try {
    const { name, price, stock } = req.body
    
    // Validation
    if (!name || price === undefined) {
      return res.status(400).json({
        message: 'Name and price are required',
        status: 'error'
      })
    }
    
    if (price < 0 || (stock !== undefined && stock < 0)) {
      return res.status(400).json({
        message: 'Price and stock must be non-negative',
        status: 'error'
      })
    }
    
    const product = await createProduct({ name, price, stock: stock || 0 })
    
    res.status(201).json({
      data: product,
      status: 'success',
      message: 'Product created successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error creating product',
      status: 'error'
    })
  }
}

// Update product
export const updateProductHandler = async (req, res) => {
  try {
    const { id } = req.params
    const { name, price, stock } = req.body
    
    // Check if product exists
    const existingProduct = await getProductById(id)
    if (!existingProduct) {
      return res.status(404).json({
        message: 'Product not found',
        status: 'error'
      })
    }
    
    // Validation
    if (price !== undefined && price < 0) {
      return res.status(400).json({
        message: 'Price must be non-negative',
        status: 'error'
      })
    }
    
    if (stock !== undefined && stock < 0) {
      return res.status(400).json({
        message: 'Stock must be non-negative',
        status: 'error'
      })
    }
    
    // Prepare update data (only include provided fields)
    const updateData = {}
    if (name !== undefined) updateData.name = name
    if (price !== undefined) updateData.price = price
    if (stock !== undefined) updateData.stock = stock
    
    const product = await updateProduct(id, updateData)
    
    res.json({
      data: product,
      status: 'success',
      message: 'Product updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error updating product',
      status: 'error'
    })
  }
}

// Delete product
export const deleteProductHandler = async (req, res) => {
  try {
    const { id } = req.params
    
    // Check if product exists
    const existingProduct = await getProductById(id)
    if (!existingProduct) {
      return res.status(404).json({
        message: 'Product not found',
        status: 'error'
      })
    }
    
    await deleteProduct(id)
    
    res.json({
      status: 'success',
      message: 'Product deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error deleting product',
      status: 'error'
    })
  }
}
