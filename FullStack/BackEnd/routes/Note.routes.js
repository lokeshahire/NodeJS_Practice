const express = require('express');
const { NoteModel } = require("../model/Note.model")

const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
    const notes = await NoteModel.find()
    res.send(notes);
})

noteRouter.post("/create", async (req, res) => {
    const user = new NoteModel(req.body);
    await user.save();
    res.send({ msg: "Notes Created" });
})

noteRouter.patch("/update/:id", async (req, res) => {



    module.exports = { noteRouter }