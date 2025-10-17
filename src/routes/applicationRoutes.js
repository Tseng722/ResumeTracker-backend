const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController.js');
const authMiddleware = require('../middleware/authMiddleware.js');



router.get('/', authMiddleware,applicationController.getUserApplication);
router.post('/createApplication', applicationController.createApplication);


module.exports = router;
