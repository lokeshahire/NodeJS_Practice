
const express = require('express');
const { UserModel } = require("../model/User.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.send({ msg: "user registration failed", "error": err.message });
            }
            else {
                const user = new UserModel({ name, email, password: hash });
                await user.save();
                res.send({ msg: "user registration successful" });
            }
        });

    } catch (e) {
        res.send({ msg: "user registration failed", "error": e.message });
    }
});


userRouter.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {

    } catch (e) {
        res.send({ msg: "user registration failed", "error": e.message });

    }
});




module.exports = { userRouter }



