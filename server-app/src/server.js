const express = require("express");
const app = express();
require('dotenv').config();

const { run } = require("./mongo");

/* Import routes */
const postRouter = require("./routers/post.router");
const userRouter = require("./routers/user.router");

/* Make sure to parse req.body as JSON */
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
