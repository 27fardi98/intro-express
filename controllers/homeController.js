import { getHomeMessage, getStatistics } from '../services/homeService.js'

export const getHome = async (req, res) => {
  try {
    const message = await getHomeMessage()
    const stats = await getStatistics()
    
    res.json({
      message: message.text,
      statistics: stats,
      status: 'success',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching home data',
      status: 'error'
    })
  }
}
