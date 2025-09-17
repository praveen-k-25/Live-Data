const {MongoClient} = require("mongodb");
let db;

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URL);
    await client.connect();
    db = client.db("GEO_LOCATION");
    console.log("😀 Database connected");
  } catch (err) {
    console.log("😢 Database connection failed : ", err);
  }
};

const getDB = () => {
  if (!db) {
    let err = new Error();
    err.statusCode = 500;
    err.message = "😡 Database not connected";
    throw err;
  }
  return db;
};

module.exports = {connectDB, getDB};
