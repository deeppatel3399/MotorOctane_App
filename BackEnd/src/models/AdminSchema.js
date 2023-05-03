const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
    {
    name:String,
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
    },
    {
        collection:"Admin"
    }
);

mongoose.model("Admin",AdminSchema);