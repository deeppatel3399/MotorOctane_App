const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        VEHICLEDATA:{type:Array}
    },
    {
        collection:"carData"
    }
);

mongoose.model("carData",carSchema);