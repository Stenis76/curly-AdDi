const mongoose = require("mongoose");

async function connect() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(MONGODB_URI, options);
  
    mongoose.connection.on("connected", () => console.log("Connected to database"))
    mongoose.connection.on("error", () => console.log("Database connection error"));
 
  } catch (err) {
    console.log("Failed to connect to database", err);
  }
}

// /**
//  *
//  * @param {mongodb.Db} db
//  */
// async function createCollections(db) {
//   const usersCollection = await db.createCollection("users");
//   console.log("collections has been created");
//   // create all needed collections
//   return [usersCollection];
// }

// /**
//  *
//  * @param {mongodb.Collection} collection
//  */
// async function createUser(collection) {
//   const res = await collection.insertOne({
//     name: "David",
//     password: "s3cr3t",
//   });
//   console.log("A user was created");
// }

// /**
//  *
//  * @param {mongodb.Collection} collection
//  */
// async function deleteUser(collection) {
//   const res = await collection.deleteMany({ name: "Lisa" });
//   console.log("A user was maybe deleted, count: ", res.deletedCount);
// }

// /**
//  *
//  * @param {mongodb.Collection} collection
//  */
// async function findUser(collection) {
//   const users = await collection.find({ name: "David" }).toArray();
//   console.log(users);
//   return users;
// }

async function run() {
   await connect();
}

module.exports = {
  run
};

// anv: adam password:qfmM0ypqTB85T99v
