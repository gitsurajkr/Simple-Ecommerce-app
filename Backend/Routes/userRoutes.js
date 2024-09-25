const express = require('express');
const connectDb = require('../config/db');

const {
    createNewUser,
    loginCurrentUser,
    logOutCurrentUser
} = require('../Controller/userController');

// const authenticatedUser = require('../Middleware/authMiddleware');
const router = express.Router();
router.use(express.json());
connectDb();

router.post('/register', createNewUser);
router.post('/login', loginCurrentUser); 
router.post('/logout', logOutCurrentUser); 

module.exports = router;
