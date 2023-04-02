const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    brand:String,
    info:String,
    user:String
},{
    versionKey:false
})

const ProductModel = mongoose.model("product",productSchema)

module.exports={
    ProductModel
}
