const mongodb = require('mongodb')


async function connect() {
  const client = mongodb.MongoClient
  const url = "mongodb://localhost:27017/sailingboats"
  const options = { useUnifiedTopology: true }
  const mongoConnection = await client.connect(url, options)
  console.log('Connected to database');
  const db = mongoConnection.db('sailboats')
  console.log('database has been created');
  return db


}

async function createCollections(db) {
  const usersCollection = await db.createCollection('users')
  console.log('collections has been created');
  return [usersCollection]

}

async function run() {
  const db = await connect()
  const collections = await createCollections(db)
}




run()