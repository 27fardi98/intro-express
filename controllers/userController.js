import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService.js'

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers()
    res.json({
      data: users,
      status: 'success',
      count: users.length
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching users',
      status: 'error'
    })
  }
}

// Get user by ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)
    
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        status: 'error'
      })
    }
    
    res.json({
      data: user,
      status: 'success'
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching user',
      status: 'error'
    })
  }
}

// Create user
export const createUserHandler = async (req, res) => {
  try {
    const { name, email, age } = req.body
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({
        message: 'Name and email are required',
        status: 'error'
      })
    }
    
    const user = await createUser({ name, email, age })
    
    res.status(201).json({
      data: user,
      status: 'success',
      message: 'User created successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error creating user',
      status: 'error'
    })
  }
}

// Update user
export const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email, age } = req.body
    
    // Check if user exists
    const existingUser = await getUserById(id)
    if (!existingUser) {
      return res.status(404).json({
        message: 'User not found',
        status: 'error'
      })
    }
    
    // Prepare update data (only include provided fields)
    const updateData = {}
    if (name !== undefined) updateData.name = name
    if (email !== undefined) updateData.email = email
    if (age !== undefined) updateData.age = age
    
    const user = await updateUser(id, updateData)
    
    res.json({
      data: user,
      status: 'success',
      message: 'User updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error updating user',
      status: 'error'
    })
  }
}

// Delete user
export const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params
    
    // Check if user exists
    const existingUser = await getUserById(id)
    if (!existingUser) {
      return res.status(404).json({
        message: 'User not found',
        status: 'error'
      })
    }
    
    await deleteUser(id)
    
    res.json({
      status: 'success',
      message: 'User deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error deleting user',
      status: 'error'
    })
  }
}
