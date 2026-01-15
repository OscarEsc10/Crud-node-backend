import express from 'express'
import router from './src/modules/users/user.routes.js';
import { PORT } from './src/config/config.js'
import { testConnection } from './src/config/dbConnection.js'
import cors from 'cors'

const connection = testConnection()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/users', router)

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the CRUD API",
        endpoints: {
            users: "/api/users"
        }
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(`Database connection: ${connection}`)
})