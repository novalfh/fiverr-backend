import express from "express";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import cookieParser from "cookie-parser";
import bcrypt from 'bcrypt'

dotenv.config()


const app = express()
const port = process.env.PORT

// config pre-middleware
app.use(cors({
    origin:[process.env.ORIGIN],
    methods:['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());



app.listen(port, () => {
    console.log('listening on ', port)
})