const express = require('express');
const User = require('../Model/userSchema');
const bcrypt = require('bcryptjs');
const zodValidation = require('../config/zodValidation');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const generateToken = require('../Utils/generateToken');
const app = express();
app.use(cookieParser());
app.use(express.json());

// Create a new user
const createNewUser = async (req, res) => {
    try {
        zodValidation.parse(req.body); // Validate input
        
        const { firstName, lastName, username, email, password, isAdmin = false } = req.body;

        // Check for duplicate user
        const userExist = await User.findOne({ $or: [{ email }, { username }] });
        if (userExist) {
            return res.status(400).json({ message: "User with this email or username already exists" });
        }

        // Hash password and create user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            isAdmin
        });

        await newUser.save();

        const token = generateToken(res, newUser._id);
        
        res.status(201).json({
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            username: newUser.username,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: token
        });
    } catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
};

// Login a user
const loginCurrentUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(res, existingUser._id);
    res.status(200).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
        token: token
    });
};

// Log out a user
const logOutCurrentUser = async (req, res) => {
    res.cookie("jwt", '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out" });
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(user){
            user.firstName = req.body.firstName || user.firstName;
            user.lastName = req.body.LastName || user.lastName;
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            user.isAdmin = req.body.isAdmin || user.isAdmin;
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(req.body.password, salt);
            }
            const updatedUser = await user.save();
            res.status(200).json(updatedUser);
        }
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            await user.remove();
            res.status(200).json({message: "user deleted"})            
        }
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateuserAdmin = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            user.isAdmin = req.body.isAdmin;
            const updatedUser = await user.save();
            res.status(200).json(updatedUser);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports = { createNewUser, 
    loginCurrentUser, 
    logOutCurrentUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser, 
    getUserProfile, 
    updateuserAdmin 
};
