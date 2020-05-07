const express = require("express");
const router = express.Router();
const Post = require("../models/post.model");

// GET ALL
router.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE
router.get("/api/posts/:postId", (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
});

// CREATE
router.post("/api/posts", (req, res) => {
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    date: new Date(),
  });
  post
    .save()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(400).json(err));
});

// DELETE
router.delete("/api/posts/:postId", async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.status(200).json(removedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE

router.put("/api/posts/:postId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { name: req.body.name, password: req.body.password } }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
