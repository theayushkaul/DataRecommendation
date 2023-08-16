const router = require("express").Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();
// Register
router.post("/register", [body('name', 'Enter a valid name').isLength({ min: 3 }),
body('email', 'Enter a valid email').isEmail(),
body('password', 'Password must be alphanumeric and must be of 8 characters').isLength({ min: 5 }).isAlphanumeric()]
,async (req, res) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            name:req.body.name,
            email: req.body.email,  
            password: hashedPassword
        })
        const user = await newUser.save()
        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_CONST)
        res.status(200).json(user)
    }
    catch (err) { res.status(500).json("Internal Server Error Occured") }
})

// Login
router.post("/login", [body('email', 'Enter a valid email').isEmail(),
body('password', 'Password cannot be blank').exists()], async (req, res) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email });
        !user && res.status(400).json("Wrong credentials!");
        const validated = await bcrypt.compare(password, user.password);
        if (!validated) {
            return res.status(400).json({ error: "Wrong Credentials" })
        }
        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_CONST)
        res.status(200).json({ authToken,user })
    } catch (err) {
        res.status(500).json("Internal Server Error");
    }
});

module.exports = router