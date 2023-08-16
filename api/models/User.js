const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String,
        unique: true
    },
    password:{
        required: true,
        type: String
    },
    dataSet:{
        type:String,
        default:""
    }
},{timestamps:true})
module.exports = mongoose.model("User",UserSchema)