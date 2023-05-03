const mongoose = require("mongoose");

const uri = "mongodb+srv://avi1234:Avi%401234@cluster0.ucyako4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,
}).then(()=>{

    console.log("Carapp Database Connect");

}).catch((err)=>{
    console.log("database not connect")
    console.log(err)
});