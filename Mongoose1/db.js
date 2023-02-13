const mongoose = require('mongoose');

const db = async () => {

    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/mongoose1")
        console.log("mongodb connected")

        await StudentModal.insertMany([{
            name: "Lokesh",
            age: "27",
            city: "Nashik"
        }])
        console.log("Inserted data")
    } catch (e) {
        console.log("error", e)

    }
}
db()


const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
})

const StudentModal = mongoose.model("student", studentSchema)