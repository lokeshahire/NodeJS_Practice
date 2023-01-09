const express = require("express");
const { connection } = require("./configs/db")
const { userRouter } = require("./routes/User.routes")
const { noteRouter } = require("./routes/Note.routes")