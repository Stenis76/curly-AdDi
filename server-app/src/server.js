const express = require("express");
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/post.router");
const { run } = require("./mongo");
const app = express();

/* Make sure to parse req.body as JSON */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Add API resourses */
app.use(userRouter);
app.use(postRouter);

app.get("/", (req, res) => {});

// run the database
run();

const PORT = process.env.PORT || 8080;
/* Start server */
app.listen(PORT, () =>
  console.log(`Server is up and running on port: ${PORT}`)
);
