const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("./src/db/dbConn");
require("./src/models/UserRegister");
require("./src/models/AdminSchema");
require("./src/models/AddCar");

const User = mongoose.model("UserData");
const Admin = mongoose.model("Admin");
const Car = mongoose.model("carData");


app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.json({ msg: "User Already Exist", status: 400 });
    }
    await User.create({
      fname,
      lname,
      email,
      password,
    });
    res.json({ msg: "Data Insert Successfully", status: 200 });
  } catch (err) {
    console.log(err);
    res.json({ msg: "Data Not Inserted", status: 400 });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existUser = await User.findOne({ email });

  const existAdmin = await Admin.findOne({ email });

  if (existUser) {
    if ((await password) === existUser.password) {
      if (res.status(201)) {
        return res.json({ status: 200 });
      } else {
        return res.json({ error: "Invalid Credentials", status: 404 });
      }
    }
  } else if (existAdmin) {
    if ((await password) === existAdmin.password) {
      if (res.status(201)) {
        return res.json({ status: 200, role: "A" });
      } else {
        return res.json({ error: "Invalid Credentials", status: 404 });
      }
    }
  } else {
    return res.json({ error: "Invalid Credentials", status: 404 });
  }
});

app.post("/addcar", async (req, res) => {

  const {      
    brandName,
    carName,
    carposter,
    price,
    brandNo,
    mileage,
    engine,
    transmission,
    fuelType,
    seatingCapacity,
    driveTrain,
    emissionStd} = req.body;

  const newCarData = {
    id: "7",
    carname: carName,
    carposter: carposter,
    price: price,
    brandNo: brandNo,
    mileage: mileage,
    engine: engine,
    transmission: transmission,
    fueltype: fuelType,
    seatingcapacity: seatingCapacity,
    drivetrain: driveTrain,
    EmissionStandard: emissionStd,
    mileages: [
      {
        id: "1",
        kmpl: "14.6 kmpl",
        varient: "Manual",
        fueltype: "Petrol(1999 cc)"
      },
      {
        id: "2",
        kmpl: "14.6 kmpl",
        varient: "Automatic (Torque Converter)",
        fueltype: "Petrol(1999 cc)"
      },
      {
        id: "3",
        kmpl: "22.54 kmpl",
        varient: "Manual",
        fueltype: "Diesel(1493 cc)"
      }
    ],
    colour: [
      {
        id: "1",
        color: "white",
        colorname: "polar white"
      }
    ]
  };
  
  const vehicleData = await Car.findById({_id:"6441777e63b8bd8ed0a32f99"});

  const carBrandData = await vehicleData.VEHICLEDATA.find(val => 
    val.hasOwnProperty(brandName)
    );
  if(brandName==='Tata')
  {carBrandData.Tata.push(newCarData)}
  else if(brandName==='Hyundai')
  {carBrandData.Hyundai.push(newCarData)}
  else if(brandName==='Toyota')
  {carBrandData.Toyota.push(newCarData)}
  else if(brandName==='Mahindra')
  {carBrandData.Mahindra.push(newCarData)}
  else if(brandName==='BMW')
  {carBrandData.BMW.push(newCarData)}
  else if(brandName==='Ferrari')
  {carBrandData.Ferrari.push(newCarData)}
  else if(brandName==='Suzuki')
  {carBrandData.Suzuki.push(newCarData)}
  else if(brandName==='BYD')
  {carBrandData.BYD.push(newCarData)}

  const insetData = vehicleData.VEHICLEDATA;
  await Car.findByIdAndUpdate({_id:"6441777e63b8bd8ed0a32f99"},{$set:{
      VEHICLEDATA:insetData
  }});

  return res.json({data:"Car added successfully",status:200});

});

app.get("/fetchCar",async(req,res)=>{

  try{

    const CarData = await Car.find({});

    const data = CarData[0].VEHICLEDATA;

    return res.json({data});

  }
  catch(err)
  {
    console.log(err);
  }

});

app.listen(5000, () => {
  console.log("Server Start on PORT NO 5000");
});
