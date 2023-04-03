const express = require("express")
const { UserModel } = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const userRouter = express.Router()

userRouter.post("/register",async(req,res)=>{
    const {firstname,lastname,phone,email,password}= req.body
    try{
        bcrypt.hash(password,4,async(err,hash)=>{
            if(err){
                res.send({"msg":err.message})
            }else{
                const user = new UserModel({firstname,lastname,phone,email,password:hash})
                await user.save()
                res.send({"msg":"new user register"}) ;
            }
        })
         
    }catch(err){
       res.send({"msg":err.message})
    }
   
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=(req.body)
    try{
          const user = await UserModel.find({email})
          if(user.length>0){
            bcrypt.compare(password,user[0].password,(err, result)=> {
                if(result){
                    let token = jwt.sign({userID:user[0]._id},"project")
                  res.send({"msg":"logged in","token":token})
                  alert("Logged In")
                  window.location.href ="/index.html"
                }else{
                    res.send({"msg":"Wrong Credentials"})
                    alert("Wrong Credentials")
                } 
            });
        }else{
            res.send({"msg":"Wrong Credentials"})
            alert("Wrong Credentials")
        }

    }catch(err){
        res.send({"msg":err.message})
    }
})
 
module.exports={
    userRouter
}