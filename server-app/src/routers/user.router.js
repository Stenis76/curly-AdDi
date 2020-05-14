const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const authenticatedUsers = require("../authenticatedUsers.js");

// GET ALL
router.get("/api/users", async (req, res) => {
  // console.log("users", authenticatedUsers.users);

  // if (!authenticatedUsers.isAuthenticated(req.sessionID)) {
  //   res.status(500).json("Not authenticated");
  //   console.log("Not authenticated");
  //   return;
  // }
  const { userId } = req.session;
  console.log("userId", userId);

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE BY ID
router.get("/api/users/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE BY USERNAME
// router.get("/api/users/:username", (req, res) => {
//   try {
//     const user = User.findOne(req.params.username);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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
      User.create(userData, (err, user) => {
        if (err) {
          console.log(err);

          res.status(400).json(err);
        } else {
          // store authentication session
          authenticatedUsers.addAuthenticated(user._id);

          res.status(201).json({ status: "Authenticated", user });
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

        // store authentication session
        authenticatedUsers.addAuthenticated(user._id);

        res.status(200).json({
          status: "Authenticated",
          user: {
            _id: user._id,
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
router.get("/api/logout/:userId", (req, res, next) => {
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

  authenticatedUsers.removeAuthenticated(req.params.userId);
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
