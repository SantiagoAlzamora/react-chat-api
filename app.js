const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./connectionDB')
const userRouter = require('./src/routes/userRoutes')
const conversationRouter = require('./src/routes/conversationRoutes')
const messageRouter = require('./src/routes/messageRoutes')

const app = express()


require('dotenv').config();

//ConectionDB
connectDB();

//Settings
app.set('port',process.env.port || 3001)

//MIDDLEWARES
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'))
app.use(cors())

//Routes
app.use("/api/users",userRouter)
app.use("/api/messages",messageRouter)
app.use("/api/conversations",conversationRouter)
module.exports = app;