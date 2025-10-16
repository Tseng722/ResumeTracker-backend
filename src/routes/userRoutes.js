const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const auth = require('../middleware/auth');
const authMiddleware = require('../middleware/authMiddleware.js');

router.post('/', authMiddleware, userController.createUser);
router.get("/getUserPersonalExperience", authMiddleware, userController.getUserPersonalExperience);
router.put("/updateUserPersonalExperience", authMiddleware, userController.updateUserPersonalExperience);

router.post('/createEducation', authMiddleware, userController.createEducation);


router.get('/', authMiddleware, userController.getUsers);
router.get('/:id', authMiddleware, userController.getUserById);
// router.put('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);


module.exports = router;
