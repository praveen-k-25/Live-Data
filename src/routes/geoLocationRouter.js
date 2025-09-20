const express = require("express");
const {createGeoLocation} = require("../controllers/geoLocator");
const router = express.Router();

router.post("/neelan", createGeoLocation);

module.exports = router;
