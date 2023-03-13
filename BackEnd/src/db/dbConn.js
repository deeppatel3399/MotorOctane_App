const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/carAppUser",{
    useNewUrlParser: true,
}).then(()=>{

    console.log("Carapp Database Connect");

}).catch((err)=>{
    console.log("database not connect")
    console.log(err)
});