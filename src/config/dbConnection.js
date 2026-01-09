import { Pool } from 'pg'
import { DATABASE_URL } from './config.js'

const pool = new Pool({ connectionString: DATABASE_URL })

export const testConnection = async () => {
  try {
    console.log('⏳ Connecting to PostgreSQL database...')
    const result = await pool.query('SELECT NOW()')
    console.log('Database connection successful:', result.rows[0].now)
  } catch (error) {
    console.error('Database connection failed:', error.message)
  }
}

export default pool
