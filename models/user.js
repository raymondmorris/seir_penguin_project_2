//////////////////////////
// Import Dependencies
//////////////////////////
const mongoose = require("./connection.js")

///////////////////////
// User Model & Schema
///////////////////////
const {Schema, model} = mongoose 

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},

})

const User = model("User", userSchema)


////////////////////
// Export
////////////////////
module.exports = User;