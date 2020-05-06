const express = require("express");
const router = express.Router();
const Post = require("../models/post.model");

// GET ALL
router.get("/api/posts", (req, res) => {});

// GET ONE
router.get("/api/posts/:id", (req, res) => {});

// CREATE
router.post("/api/posts", (req, res) => {});

// DELETE
router.delete("/api/posts/:id", (req, res) => {});

// UPDATE
router.put("/api/posts/:id", (req, res) => {});

module.exports = router;
