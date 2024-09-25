const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');

// User Routes

router.use('/users', userRouter);

module.exports = router;