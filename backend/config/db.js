const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/selection")
        console.log("database connectes successfully");
    }catch(err)
    {
        console.log("err",err.message);
    }
}
module.exports=connectDB;