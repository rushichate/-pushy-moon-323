const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:Number,
    email:String,
    password:String
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema)

module.exports={
    UserModel
}