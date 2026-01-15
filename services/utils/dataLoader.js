import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load dummy data
export const loadData = () => {
  try {
    const dataPath = join(__dirname, '../../data/dummyData.json')
    const data = readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading data:', error)
    return null
  }
}
