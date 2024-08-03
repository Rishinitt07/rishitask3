const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   
    user: String
   
})

const friendsModel = mongoose.model("friends",userSchema)
module.exports = friendsModel