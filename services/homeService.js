import { supabase } from '../config/supabase.js'
import { getAllUsers } from './userService.js'
import { getAllProducts } from './productService.js'

// Get home message
export const getHomeMessage = async () => {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('id', { ascending: true })
      .limit(1)
      .single()
    
    if (error) throw error
    return data || { text: 'Hello World!', id: 0 }
  } catch (error) {
    console.error('Error fetching message:', error)
    return { text: 'Hello World!', id: 0 }
  }
}

// Get statistics
export const getStatistics = async () => {
  try {
    const users = await getAllUsers()
    const products = await getAllProducts()
    
    return {
      totalUsers: users.length || 0,
      totalProducts: products.length || 0,
    }
  } catch (error) {
    console.error('Error fetching statistics:', error)
    return {
      totalUsers: 0,
      totalProducts: 0,
    }
  }
}
