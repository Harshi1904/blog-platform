const express = require("express");
const Comment = require("../models/Comment");

const router = express.Router();

// Add Comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Comments By Post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({
      postId: req.params.postId
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;