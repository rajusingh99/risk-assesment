const express = require("express");
const { scenario, getAllScenario } = require("../Controllers/scenario");
const { auth } = require("../middlewares/auth");
const router = express.Router();
// Create scenario route.
router.post("/scenario/create", auth, scenario);
// Get All scenario data route.
router.get("/scenario", auth, getAllScenario);

module.exports = router;
