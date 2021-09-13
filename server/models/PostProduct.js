import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,

    file: String,
    file1: String,
    file2: String,
    tags: String,
    meta: String,
    detail: String,




    createdAt: {
        type: Date,
        default: new Date(),
    }


});

const PostProduct = mongoose.model('PostProduct', postSchema);


export default PostProduct;