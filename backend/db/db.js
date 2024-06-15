require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

// Function to establish the connection and ping the database
async function connectToMongoDB() {
  // MongoDB connection URI
  const uri = process.env.MONGO_URI;

  // Create a MongoClient with ServerApiVersion.v1
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    // Connect the client to the MongoDB server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("db connected");
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
}

// Export the function to use in other parts of your application
module.exports = connectToMongoDB;
