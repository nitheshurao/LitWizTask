import express from 'express';
import mongoose from 'mongoose';



import PostProduct from '../models/PostProduct.js';
const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const PostProducts = await PostProduct.find();

        res.status(200).json(PostProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostProduct.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, description, file, tag, meta, detail } = req.body;

    const newPostProduct = new PostProduct({ title, description, file, tag, meta, detail })

    try {
        await newPostProduct.save();

        res.status(201).json(newPostProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFiles, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFiles, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    console.log("deletePost node" + id)

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}




export default router;