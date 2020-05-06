const express = require("express");
const router = express.Router();

// GET ALL
router.get("/api/posts", function (req, res) {});

// GET ONE
router.get("/api/posts/:id", function (req, res) {});

// CREATE
router.post("/api/posts", function (req, res) {});

// DELETE
router.delete("/api/posts/:id", function (req, res) {});

// UPDATE
router.put("/api/posts/:id", function (req, res) {});

module.exports = router;
