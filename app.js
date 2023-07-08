//! server using node and express js

const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/Login",cors(),(req,res)=>{

})


app.post("/Login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email,password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/Signup", async (req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json( "exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(3001,()=>{
    console.log("port connected");
})



