import mongoose , {Schema} from "mongoose";


const postSchema = new Schema ({
    surename: {
        type: String,
        required: true, 
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    message:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: ()=> Date.now(),
        immutable: true
    }
})



export const Post = mongoose.model("POST", postSchema)