const express = require("express");
const {createGeoLocation} = require("../controllers/geoLocator");
const router = express.Router();

router.post("/", createGeoLocation);

module.exports = router;
