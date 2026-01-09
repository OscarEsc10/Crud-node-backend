import express from 'express'
import { PORT } from './src/config/config.js'
import { testConnection } from './src/config/dbConnection.js'
import cors from 'cors'

const connection = testConnection()
const app = express()
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(`Database connection: ${connection}`)
})