import express from 'express'
import { 
  getUsers, 
  getUser, 
  createUserHandler, 
  updateUserHandler, 
  deleteUserHandler 
} from '../controllers/userController.js'

const router = express.Router()

// CRUD Routes
router.get('/', getUsers)           // GET /api/users - Get all users
router.get('/:id', getUser)         // GET /api/users/:id - Get user by ID
router.post('/', createUserHandler) // POST /api/users - Create user
router.put('/:id', updateUserHandler)   // PUT /api/users/:id - Update user
router.delete('/:id', deleteUserHandler) // DELETE /api/users/:id - Delete user

export default router
