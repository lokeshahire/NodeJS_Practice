const express = require("express");
const { connection } = require("./configs/db");
const { UserModel } = require("./model/User.model");
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HOME PAGE");
});

app.post("/register", async (req, res) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.send({ msg: "user registration successful" });
    } catch (e) {
        res.send({ msg: "user registration failed", "error": e.message });
    }
});


app.post("/login", async (req, res) => {

    const { email, pass } = req.body;
    const token = jwt.sign({ course: 'backend' }, 'masai');
    // const token = jwt.sign({ email: email, pass: pass }, 'SECRET123', {
    //     expiresIn: "7 hours"
    // });

    try {

        // const user = UserModel.find({ email: email, pass: pass });  
        const user = await UserModel.find({ email, pass });    // if both email and pass name same then we can use only on name as per es6
        if (user.length > 0) {

            res.send({ msg: "user Login successful", "token": token });
        }
        else {
            res.send({ msg: "user Authentication failed" });

        }
    }
    catch (e) {
        res.send({ msg: "user login failed", "error": e.message });

    }
});

app.get("/data", (req, res) => {

    const token = req.headers.authorization

    // if (token == "abc123") {
    //     res.send("DATA PAGE");

    // }
    // else {
    //     res.send(" Please Login first");

    // }


    jwt.verify(token, 'masai', (err, decoded) => {
        if (decoded) {
            res.send("DATA PAGE");
        }
        else {
            res.send({ "err": err.message });
        }

    });

});

app.get("/cart", (req, res) => {

    const token = req.headers.authorization

    // if (token == "abc123") {
    //     res.send("CART PAGE");

    // }
    // else {
    //     res.send(" Please Login first");
    //}

    jwt.verify(token, 'masai', (err, decoded) => {
        if (decoded) {
            res.send("CART PAGE");
        }
        else {
            res.send({ "err": err.message });

        }
    });
});
app.get("/about", (req, res) => {
    res.send("ABOUT PAGE");
});

app.listen(8080, async () => {


    console.log("listening 8080");
});
