const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// GET ALL
router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE
router.get("/api/users/:userId", async (req, res) => {
  try {
    const post = await User.findById(req.params.userId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE
router.post("/api/users", (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password,
  });

  user
    .save()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(400).json(err));
});

// DELETE
router.delete("/api/users/:userId", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.status(200).json(removedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/api/users/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { name: req.body.name, password: req.body.password } }
    );
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
