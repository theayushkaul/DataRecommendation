const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();
const fetchUser = (req, res, next) => {
    const token = req.header('authToken')
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, process.env.JWT_CONST)
        res.user = data.user
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = fetchUser