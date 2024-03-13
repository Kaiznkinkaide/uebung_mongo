import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import 'dotenv/config'
import multer from "multer"
import fs from 'fs/promises'



import expensesRouter from './expenses/controller.js'

const PORT = 3000
const app = express()



await mongoose.connect(process.env.MONGODB_URI)

app.use("/expenses", expensesRouter)


app.listen(PORT, ()=>{
    console.log(`listining on http://localhost:${PORT}`);
})



