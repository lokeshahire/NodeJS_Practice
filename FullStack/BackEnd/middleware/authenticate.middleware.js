const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {

    const token = req.headers.authorization

    if (token) {

    }
    else {
        res.send({ msg: "Please Login" })

    }

}


module.exports = {
    authenticate
}