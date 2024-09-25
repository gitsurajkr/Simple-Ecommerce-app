const zod = require('zod');
const express = require('express');

const app = express(); // You need to initialize `app` before using it

app.use(express.json());

const zodValidation = zod.object({
    firstName: zod.string().min(3).max(20),
    lastName: zod.string().min(3).max(20),
    username: zod.string().min(3).max(20),
    email: zod.string().email(),
    password: zod.string().min(6).max(100),
});

module.exports = zodValidation;
