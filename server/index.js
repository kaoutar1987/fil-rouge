require('dotenv').config({ path: './.env' })
require('./database/db')

const express = require('express')

const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')


const corsOptions = {
    origin: 'http://localhost:3003', 
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())




//listen server
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Example app listening on port ${port}`))