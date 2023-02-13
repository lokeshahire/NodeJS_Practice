const mongoose = require('mongoose')
require('dotenv').config()



// const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongoose2")
// const connection = mongoose.connect("mongodb+srv://lokesh:ahire@cluster0.entjnlc.mongodb.net/mongoose2?retryWrites=true&w=majority")
const connection = mongoose.connect(process.env.mongoURL)





module.exports = { connection }
