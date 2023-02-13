const express = require("express");
require('dotenv').config()
const { connection } = require("./db")
const { userRouter } = require("./routes/User.routes")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome")
})
app.use("/users", userRouter)


app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (e) {
        console.log("Not Connected to DB")
        console.log(e)
    }

    console.log(`listening on port ${process.env.port}`);
});
