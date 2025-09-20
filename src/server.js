require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {connectDB} = require("./database/database");
const {GlobalErrorHandler} = require("./middleware/errorHandler");
const geoRouter = require("./routes/geoLocationRouter");

connectDB();
const app = express();
app.use(
  cors({
    origin: "*" /* [
      "*",
      "http://localhost:4005",
      "http://localhost:5173",
      "https://1d2103g4-5173.inc1.devtunnels.ms",
      "http://1d2103g4-5173.inc1.devtunnels.ms",
      "https://1d2103g4-5173.inc1.devtunnels.ms/"
    ] */,
  })
);
app.use(express.json());
const PORT = process.env.PORT || 4005;

app.use("/api", geoRouter);

app.use(GlobalErrorHandler);

app.listen(PORT, () => {
  console.log(`😁 Server connected on port ${PORT}`);
});
