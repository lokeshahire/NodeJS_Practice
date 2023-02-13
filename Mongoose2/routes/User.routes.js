const express = require('express');
const userRouter = express.Router()

const { userModel } = require("../model/Users.model")

userRouter.get("/", async (req, res) => {
    let query = req.query
    try {
        const users = await userModel.find(query)
        res.send(users)
    } catch (e) {
        res.send({ "msg": "user registration failed", "error": e.message })
    }

})


userRouter.patch("/update/:id", async (req, res) => {
    let ID = req.params.id
    let payload = req.body
    try {
        await userModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send("users updated successfully")

    } catch (e) {
        res.send({ "msg": "Modify failed", "error": e.message })
    }

})


userRouter.delete("/delete/:id", async (req, res) => {
    let ID = req.params.id
    try {
        await userModel.findByIdAndDelete({ _id: ID })
        res.send("users Deleted successfully")

    } catch (e) {
        res.send({ "msg": "Deleted failed", "error": e.message })
    }

})

userRouter.post("/register", async (req, res) => {
    // console.log(req.body)
    try {
        const user = new userModel(req.body)
        await user.save()
        res.send({ "msg": "user registration successful" })
    } catch (e) {
        res.send({ "msg": "user registration failed", "error": e.message })
    }

})

module.exports = {
    userRouter
}