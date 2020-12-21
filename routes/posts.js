const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch (err){
        res.json(err);
    }
});

router.post('/', async (req,res) => {
    const post = new Post({
        name: req.body.name,
        time: req.body.time
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch (err){
        res.json(err);
    }
});

module.exports = router;