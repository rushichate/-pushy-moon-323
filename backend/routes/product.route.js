const express = require("express")
const {ProductModel} = require("../models/product.model")

const productRouter = express.Router()

productRouter.get("/",async(req,res)=>{
    const products = await ProductModel.find({user})
    res.send(products)
})

productRouter.post("/add",async(req,res)=>{
    const payload = req.body
    const product =new ProductModel(payload)
    await product.save()
    res.send({"msg":"Product Added"})
})

productRouter.delete("/delete/:id",async(req,res)=>{
     const noteID = req.params.id
     await ProductModel.findByIdAndDelete({_id:noteID})
     res.send({"msg":"Product deleted"})
})

module.exports={
    productRouter
}