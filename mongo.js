//! mongodb connection establishment

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/react_p")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("error")
})

let newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model('collection',newSchema)

module.exports=collection
