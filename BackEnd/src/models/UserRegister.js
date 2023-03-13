const mongoose = require("mongoose");

const UserRegister = new mongoose.Schema(
    {
    fname:String,
    lname:String,
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
    },
    {
        collection:"UserData"
    }
);

mongoose.model("UserData",UserRegister);