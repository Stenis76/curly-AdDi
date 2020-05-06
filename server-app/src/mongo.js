const mongodb = require("mongodb");

// Här lägger vi all CRUD funktioner

async function connect() {
  const client = mongodb.MongoClient;
  const url =
    "mongodb+srv://adam:qfmM0ypqTB85T99v@clusterlab3-i3niu.azure.mongodb.net/test?retryWrites=true&w=majority";
  const options = { useUnifiedTopology: true };
  const mongoConnection = await client.connect(url, options);
  console.log("Connected to database");
  const db = mongoConnection.db("sailboats");
  console.log("database has been created");
  return db;
}

/**
 *
 * @param {mongodb.Db} db
 */
async function createCollections(db) {
  const usersCollection = await db.createCollection("users");
  console.log("collections has been created");
  // create all needed collections
  return [usersCollection];
}

/**
 *
 * @param {mongodb.Collection} collection
 */
async function createUser(collection) {
  const res = await collection.insertOne({
    name: "David",
    password: "s3cr3t",
  });
  console.log("A user was created");
}

/**
 *
 * @param {mongodb.Collection} collection
 */
async function deleteUser(collection) {
  const res = await collection.deleteMany({ name: "Lisa" });
  console.log("A user was maybe deleted, count: ", res.deletedCount);
}

/**
 *
 * @param {mongodb.Collection} collection
 */
async function findUser(collection) {
  const users = await collection.find({ name: "David" }).toArray();
  console.log(users);
  return users;
}

async function run() {
  try {
    const db = await connect();
    const collections = await createCollections(db);
    createUser(collections[0]);
    deleteUser(collections[0]);
    // db.users.insertOne({ name: "Dick" });
    const users = findUser(collections[0]);
  } catch (err) {
    console.error("Connection to database failed", err);
  }
}

module.exports = {
  run,
  createUser,
  deleteUser,
  findUser,
};

// anv: adam password:qfmM0ypqTB85T99v
