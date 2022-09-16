const express = require("express");
const router = express.Router();
// require the controller
const home = require("../controllers/home_controller");
const detail = require("../controllers/detail_controller");
// route to home page
router.get("/", home.home);
// route to detail page
router.post("/details", detail.detail);
module.exports = router;
