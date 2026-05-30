const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Create Post
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;