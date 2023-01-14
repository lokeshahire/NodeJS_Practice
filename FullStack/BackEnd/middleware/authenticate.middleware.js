const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {

    const token = req.headers.authorization

    if (token) {


    }

}


module.exports = {
    authenticate
}