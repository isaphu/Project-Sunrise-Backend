const db = require('../models');

const createPost = async (req,res) => {
    const { photo, text, timestamp} = req.body;

    const post = await db.Post.create({
        photo,
        text,
        timestamp,
        user_id: req.user.id,
    });

    res.status(201).send(post);
};
const getAllPost = async (req,res) => {
    const allPost = await db.post.findALL({ where: { user_id: req.user.id } });

    res.send(allPost)
};
const editPost = async (req,res) => {};
const deletePost = async (req,res) => {};

module.exports = {
    createPost,
    getAllPost,
    editPost,
    deletePost
}