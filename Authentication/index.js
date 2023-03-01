const express = require("express");
const { connection } = require("./configs/db");
const { UserModel } = require("./model/User.model");
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HOME PAGE");
});