const express = require('express');
const router = express.Router();
const analyzeController = require('../controllers/analyzeController');


router.post('/analyzeResume', analyzeController.handleAnalyzeResume);
router.post('/analyzeJD', analyzeController.handleAnalyzeJD);

module.exports = router;
