//! mongodb connection establishment

const mongoose=require("mongoose")
// mongoose.connect("mongodb://localhost:27017/react_p")
const dbUrl="mongodb+srv://jeethula:jeeththentharla123@cluster0.wcggury.mongodb.net/myfirstdatabase?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(dbUrl,connectionParams)
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
