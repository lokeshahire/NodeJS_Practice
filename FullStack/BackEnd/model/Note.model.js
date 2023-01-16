const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: String,
    body: String,
    user: String
})
