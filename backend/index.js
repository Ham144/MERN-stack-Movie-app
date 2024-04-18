import cookieParser from "cookie-parser";
import path from "mongoose";
import dotenv from "dotenv"
import express from "express"

//files
import connectDB from '../backend/config/db.js'


//configuration
dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 3000


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//routes
app.use('/api/v1/users', userRoutes)

app.listen(PORT, () => console.log("Server is running on") + PORT)
