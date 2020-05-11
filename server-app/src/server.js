const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const { run } = require("./mongo");

/* Import routes */
const postRouter = require("./routers/post.router");
const userRouter = require("./routers/user.router");

/* Middelwares */
app.use(cors());

//use sessions for tracking logins
app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false,
  })
);
// Make sure to parse req.body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Add API resourses */
app.use(userRouter);
app.use(postRouter);

// run the database
run();

const PORT = process.env.PORT || 8080;
/* Start server */
app.listen(PORT, () =>
  console.log(`Server is up and running on port: ${PORT}`)
);
