
const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const User = mongoose.model("User", userData)
module.exports = User

