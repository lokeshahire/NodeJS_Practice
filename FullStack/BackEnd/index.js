const express = require("express");
const { connection } = require("./configs/db")
const { userRouter } = require("./routes/User.routes")
const { noteRouter } = require("./routes/Note.routes")
const { authenticate } = require("./middleware/authenticate.middleware")
const cors = require("cors")


const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
});