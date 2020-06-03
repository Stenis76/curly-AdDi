const mongoose = require("mongoose");

async function connect() {
  try {
    const MONGODB_URI = "mongodb://127.0.0.1:27017";
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(MONGODB_URI, options);
    console.log("Connected to database");
  } catch (err) {
    console.log("Failed to connect to database", err);
  }
}

async function run() {
  await connect();
}

module.exports = {
  run,
};
