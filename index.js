import express, { json, urlencoded } from 'express'
import cors from 'cors'
import homeRoutes from './routes/homeRoutes.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import { notFoundHandler } from './middleware/notFoundHandler.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 3000

// CORS Configuration
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

// Middleware
app.use(cors(corsOptions))
app.use(json())
app.use(urlencoded({ extended: true }))

// Routes
app.use('/', homeRoutes)
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

// Error Handlers
app.use(notFoundHandler)
app.use(errorHandler)

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`)
  } else {
    console.error('❌ Error starting server:', err.message)
  }
  process.exit(1)
})
