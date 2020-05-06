const express = require("express");
const router = express.Router();

// GET ALL
router.get("/api/users", function (req, res) {});

// GET ONE
router.get("/api/users/:id", function (req, res) {});

// CREATE
router.post("/api/users", function (req, res) {});

// DELETE
router.delete("/api/users/:id", function (req, res) {});

// PUT
router.put("/api/users/:id", function (req, res) {});

module.exports = router;
