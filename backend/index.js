const express = require("express")
const {connection} = require("./db")
const { authenticate } = require("./middlewear/auth.middle")
const { productRouter } = require("./routes/product.route")
const { userRouter } = require("./routes/user.routes")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
     res.send("Home Page")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/products",productRouter)


app.listen(9797,async()=>{
    try{
        await connection
        console.log("connected to db")

    }catch(err){ 
        console.log(err.message)
    }
    console.log("server is running at port 9797")
})