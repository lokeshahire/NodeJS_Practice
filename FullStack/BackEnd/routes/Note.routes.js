const express = require('express');
const { NoteModel } = require("../model/Note.model")

const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
    const notes = await NoteModel.find()
    res.send(notes);
})
