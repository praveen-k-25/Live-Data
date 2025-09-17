const {Timestamp} = require("mongodb");
const {getDB} = require("../database/database");
const {asyncHandler} = require("../middleware/errorHandler");

let count = 0;
const createGeoLocation = asyncHandler(async (req, res) => {
  const db = await getDB();
  const collection = await db.collection("neelan");
  collection.createIndex({time: 1}, {unique: true});
  if (!req.body.time)
    return res.status(400).json({success: false, message: "Time is required"});
  await collection.insertOne(req.body);
  console.log("data recieved ", ++count, new Date());
  res
    .status(201)
    .json({success: true, message: "Location added successfully", data: count});
});

module.exports = {createGeoLocation};
