const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {

    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, "masai", (err, decoded) => {

        })
    }
    else {
        res.send({ msg: "Please Login" })

    }

}


module.exports = {
    authenticate
}