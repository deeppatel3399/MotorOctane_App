const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("./src/db/dbConn");
require("./src/models/UserRegister");

const User = mongoose.model("UserData");

app.post("/register",async(req,res)=>{

    const{fname,lname,email,password} = req.body;

   try{
  
    const existUser = await User.findOne({email});

    if(existUser)
    {
       return res.json({msg:"User Already Exist",status:400});
    }
    await User.create({
        fname,lname,email,password
    });
    res.json({msg:"Data Insert Successfully",status:200});
    }
    catch(err){
        console.log(err);
        res.json({msg:"Data Not Inserted",status:400});
    }
});

app.post("/login",async (req,res)=>{

    const {email,password} = req.body;
 
    const existUser = await User.findOne({email});
 
    if(!existUser)
    {
     return res.json({error:"Invalid Credentials",status:404});
    }
 
    if(await password===existUser.password)
    { 
     if(res.status(201))
     {
         return res.json({status:200});
     }
     else
     {
         return res.json({error:"Invalid Credentials",status:404});
     }
    }
    res.json({error:"Invalid Credentials",status:404});
 });

app.listen(5000,()=>{
    console.log("Server Start on PORT NO 5000");
});
