import express from "express"
import db from "../utils/db.js"
import {z} from "zod"
import {Post} from "./model.js"
import multer from "multer"
import 'dotenv/config'
import cors from 'cors'


const router = express.Router()
const upload = multer({dest:"uploads/"})
const corsOptions ={
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
}

router.use(express.json())
router.use(cors(corsOptions))


router.get("/", async ( req, res) =>{
    try{
        const expenses = await Post.find().lean()
        res.json(expenses)
        
    }catch(err){
        console.err(err)
        res.sendStatus(500)
    }
})


router.post("/", upload.none(),async (req, res )=> {
    try{
        const newPost =new Post(req.body)
        const saveResult = await newPost.save()
        console.log(saveResult);

    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
})




export default router