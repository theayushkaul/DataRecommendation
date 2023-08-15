const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const fetchUser = require("./fetchUser")
const { body, validationResult } = require('express-validator')
// Updating the Credentials
router.put('/update/:userId', [body('email', 'Enter a valid email').isEmail(),
body('password', 'Password cannot be blank').exists()], fetchUser, async (req, res) => {
    try {
        const userId = req.params.userId;
        const { name, email, password } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }
        await user.save();
        res.status(200).json({ message: 'User details updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Deleting the User
router.delete('/delete/:userId', fetchUser, async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(res.user.id)
        if (userId !== res.user.id) {
            return res.status(403).json({ message: 'Access denied.' });
        }
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Getting the User
router.post('/:id',fetchUser,async(req,res)=>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId).select("password")
        res.status(200).send(user)
    } catch (err) { res.status(500).send("Internal Server Error") }
})


module.exports = router;