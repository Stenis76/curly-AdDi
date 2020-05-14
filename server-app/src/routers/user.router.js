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
router.post("/api/newuser", (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: "member",
  };

  User.findOne({ username: userData.username }, (err, queriedUser) => {
    if (err) {
      console.log("Error finding user in database", err);
      return;
    }

    if (!queriedUser) {
      User.create(user, (err, user) => {
        if (error) {
          res.status(400).json(err);
        } else {
          req.session.userId = user._id;
          res.status(201).json({ status: "Authenticated" });
        }
      });
    } else {
      res.status(401).json({ status: "User-name already taken" });
    }
  });
});

// LOGIN
router.post("/api/login", (req, res) => {
  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, (err, user) => {
      if (err) {
        res.status(401).json({ status: "Wrong name" });
      } else if (user) {
        req.session.userId = user._id;
        console.log("session " + req.session.userId);
        res.status(200).json({
          status: "Authenticated",
          user: {
            username: user.username,
            name: user.name,
            email: user.email,
          },
        });
      } else {
        res.status(401).json({ status: "Wrong password" });
      }
    });
  }
});

// LOGOUT
router.get("/api/logout", (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/");
      }
    });
  }
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
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
