const express = require('express');
const {scenario,getAllScenario } = require('../Controllers/scenario');
const router = express.Router();
// Create scenario route.
router.post('/scenario',scenario);
// Get All scenario data route.
router.get('/scenario',getAllScenario);

module.exports = router;