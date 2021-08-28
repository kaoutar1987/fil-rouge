require('dotenv').config({ path: './.env' })
require('./database/db')
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

const app = express()
const corsOptions = {
    origin: 'http://localhost:3003', 
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())


app.use(fileUpload({
    useTempFiles: true
}))

//Routes
app.use('/user', require('./routes/userRouter'))



//listen server
const port =  4000
app.listen(port, () => console.log(`Example app listening on port ${port}`))