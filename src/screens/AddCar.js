import { View, Text,StyleSheet, TextInput,Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddCar = ({navigation}) => {

  const [addCarbtnVal,setAddCarbtnVal] = useState(true);

  const [brandName,setBrandName] = useState("");
  const [carName,setCarName] = useState("");
  const [carposter,setCarPoster] = useState("");
  const [price,setPrice] = useState("");
  const [brandNo,setBrandNo] = useState("");
  const [mileage,setMileage] = useState("");
  const [engine,setEngine] = useState("");
  const [transmission,setTransmission] = useState("");
  const [fuelType,setFuelType] = useState("");
  const [seatingCapacity,setSeatingCapacity] = useState("");
  const [driveTrain,setDriveTrain] = useState("");
  const [emissionStd,setEmissionStd] = useState("");


  const [brandNameErr,setBrandNameErr] = useState("");
  const [carNameErr,setCarNameErr] = useState("");
  const [carposterErr,setCarPosterErr] = useState("");
  const [priceErr,setPriceErr] = useState("");
  const [brandNoErr,setBrandNoErr] = useState("");
  const [mileageErr,setMileageErr] = useState("");
  const [engineErr,setEngineErr] = useState("");
  const [transmissionErr,setTransmissionErr] = useState("");
  const [fuelTypeErr,setFuelTypeErr] = useState("");
  const [seatingCapacityErr,setSeatingCapacityErr] = useState("");
  const [driveTrainErr,setDriveTrainErr] = useState("");
  const [emissionStdErr,setEmissionStdErr] = useState("");

  const addcar = ()=>{

    axios.post("http://localhost:5000/addcar",{
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
      emissionStd
    }).then((data)=>{
      if(data.data.status===200)
      {
        navigation.navigate("Home");
      }
    })
  };

  const brandNameblur = ()=>{
   if(brandName==="select"||brandName==="")
   {
    setBrandNameErr("Please Select Brand Name")
   }
   else
   {
    setBrandNameErr("");
   }
  };
  const carNameblur = ()=>{
    if(carName==="")
    {
     setCarNameErr("Please Enter Car Name")
    }
    else
    {
      setCarNameErr("");
    }
   };
   const carposterblur = ()=>{
    if(carposter==="")
    {
     setCarPosterErr("Please Enter Car Poster url")
    }
    else
    {
      setCarPosterErr("");
    }
   };
   const priceblur = ()=>{
    if(price==="")
    {
     setPriceErr("Please Enter Price")
    }
    else
    {
      setPriceErr("");
    }
   };
   const brandNoblur = ()=>{
    if(brandNo==="")
    {
     setBrandNoErr("Please Enter Brand No");
    }
    else
    {
      setBrandNoErr("");
    }
   };
   const mileageblur = ()=>{
    if(mileage==="")
    {
     setMileageErr("Please Enter Mileage");
    }
    else
    {
      setMileageErr("");
    }
   };
   const engineblur = ()=>{
    if(engine==="")
    {
     setEngineErr("Please Enter Engine Details");
    }
    else
    {
      setEngineErr("");
    }
   };
   const transmissionblur = ()=>{
    if(transmission==="")
    {
     setTransmissionErr("Please Enter Transmission Details");
    }
    else
    {
      setTransmissionErr("");
    }
   };
   const fuelTypeblur = ()=>{
    if(fuelType==="")
    {
     setFuelTypeErr("Please Enter Fuel Type");
    }
    else
    {
      setFuelTypeErr("");
    }
   };
   const seatingCapacityblur = ()=>{
    if(seatingCapacity==="")
    {
     setSeatingCapacityErr("Please Enter seating capacity");
    }
    else
    {
      setSeatingCapacityErr("");
    }
   };
   const driveTrainblur = ()=>{
    if(driveTrain==="")
    {
     setDriveTrainErr("Please Enter drive train");
    }
    else
    {
      setDriveTrainErr("");
    }
   };  
   const emissionStdblur = ()=>{
    if(emissionStd==="")
    {
     setEmissionStdErr("Please Enter Emission Std");
    }
    else
    {
      setEmissionStdErr("");
    }
   };

   useEffect(()=>{


      if(brandName!=="select"||brandName!=="")
      {
       setBrandNameErr("");
       setAddCarbtnVal(false);
      }
      else
      {
        setAddCarbtnVal(true);
      }

       if(carName!=="")
       {
        setAddCarbtnVal(false);
        setCarNameErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(carposter!=="")
       {
        setAddCarbtnVal(false);
        setCarPosterErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

      if(price!=="")
       {
        setAddCarbtnVal(false);
        setPriceErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(brandNo!=="")
       {
        setAddCarbtnVal(false);
        setBrandNoErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(mileage!=="")
       {        
        setAddCarbtnVal(false);
        setMileageErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(engine!=="")
       {
        setAddCarbtnVal(false);
        setEngineErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(transmission!=="")
       {
        setAddCarbtnVal(false);
        setTransmissionErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       } 

       if(fuelType!=="")
       {
        setAddCarbtnVal(false);
        setFuelTypeErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(seatingCapacity!=="")
       {
        setAddCarbtnVal(false);
        setSeatingCapacityErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(driveTrain!=="")
       {
        setAddCarbtnVal(false);
        setDriveTrainErr("");
       }
       else
       {
        setAddCarbtnVal(true);
       }

       if(emissionStd!=="")
       {
        setAddCarbtnVal(false);
        setEmissionStdErr("");
       }
       else
       {
         setAddCarbtnVal(true);
       }
   },[brandName,carName,carposter,mileage,engine,fuelType,seatingCapacity,emissionStd,driveTrain,transmission,brandNo,brandName,price])

  return (
    <>
    <View style={styles.maincontainer}>

        <Text style={styles.heading}>Add New Car</Text>

        <View style={styles.formcontainer}>

              <View style={styles.brandnamestyle}>
                <Text style={styles.inputheading}>Car Brand Name</Text>
                <select value={brandName} onChange={(e)=>{setBrandName(e.target.value)}} style={styles.brandoptionstyle} 
                onBlur={brandNameblur}>
                  <option value="select">select car</option>
                  <option value="Tata">Tata</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Toyota">Toyota</option>
                  <option value="BMW">B.M.W</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="Mahindra">Mahindra</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="BYD">BYD</option>
                </select>
                <Text style={styles.errText}>{brandNameErr}</Text>
                </View>

                <Text style={styles.inputheading}>Car Name</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter car Name' 
                onChange={(e)=>setCarName(e.target.value)}
                onBlur={carNameblur} 
                />
                <Text style={styles.errText}>{carNameErr}</Text>

                <Text style={styles.inputheading}>Car Poster Url</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter car poster url' 
                onChange={(e)=>setCarPoster(e.target.value)} 
                onBlur={carposterblur}
                />
                <Text style={styles.errText}>{carposterErr}</Text>


                <Text style={styles.inputheading}>Price</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter Price' 
                onChange={(e)=>setPrice(e.target.value)}
                onBlur={priceblur} 
                />
                <Text style={styles.errText}>{priceErr}</Text>

                <Text style={styles.inputheading}>Brand Number</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter Brand contact Number' 
                onChange={(e)=>setBrandNo(e.target.value)} 
                onBlur={brandNoblur}
                />
                <Text style={styles.errText}>{brandNoErr}</Text>

                <Text style={styles.inputheading}>mileage</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter mileage' 
                onChange={(e)=>setMileage(e.target.value)} 
                onBlur={mileageblur}
                />
                <Text style={styles.errText}>{mileageErr}</Text>

                <Text style={styles.inputheading}>Engine</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter Engine' 
                onChange={(e)=>setEngine(e.target.value)} 
                onBlur={engineblur}
                />
                <Text style={styles.errText}>{engineErr}</Text>

                <Text style={styles.inputheading}>Transmission</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter Transmission' 
                onChange={(e)=>setTransmission(e.target.value)} 
                onBlur={transmissionblur}
                />
                <Text style={styles.errText}>{transmissionErr}</Text>

                <Text style={styles.inputheading}>Fuel type</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter Fuel Type' 
                onChange={(e)=>setFuelType(e.target.value)} 
                onBlur={fuelTypeblur}
                />
                <Text style={styles.errText}>{fuelTypeErr}</Text>

                <Text style={styles.inputheading}>seating capacity</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter seating capacity' 
                onChange={(e)=>setSeatingCapacity(e.target.value)} 
                onBlur={seatingCapacityblur}
                />
                <Text style={styles.errText}>{seatingCapacityErr}</Text>

                <Text style={styles.inputheading}>Drive Train</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter drive train' 
                onChange={(e)=>setDriveTrain(e.target.value)} 
                onBlur={driveTrainblur}
                />
                <Text style={styles.errText}>{driveTrainErr}</Text>

                <Text style={styles.inputheading}>Emission Standard</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter emission standard' 
                onChange={(e)=>setEmissionStd(e.target.value)} 
                onBlur={emissionStdblur}
                />
                <Text style={styles.errText}>{emissionStdErr}</Text>

        {addCarbtnVal===true?
        <Pressable style={styles.submitbtn}><View style={styles.disabledgetbtnstyle}><Text style={styles.gettxt} onPress={addcar}>Add Car</Text></View></Pressable>
        :<Pressable style={styles.submitbtn}><View style={styles.getbtnstyle}><Text style={styles.gettxt} onPress={addcar}>Add Car</Text></View></Pressable>
         }
         
        </View>
        
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    maincontainer:
    {
        backgroundColor:'#1b1b1b',
        height:"180vh"
    },
    heading:
    {
       color:'white',
       fontSize:23,
       fontWeight:'bold',
       textAlign:'center',
       marginTop:20
    },
    brandnamestyle:
    {
      display:'flex',
      flexDirection:'row',
    },
    brandoptionstyle:
    {
       width:"40",
       marginLeft:10,
       borderRadius:10,
       height:30,
       padding:5
    },
    formcontainer:
    {
        height:250,
        padding:30,
    },
    inputheading:
    {
      fontSize:20,
      fontWeight:'bold',
      color:"#4682B4",
    },
    inputbox:
    {
      borderStyle:"solid",
      borderColor:"#4682B4",
      borderRadius:10,
      borderWidth:2,
      height:50,
      fontSize:18,
      padding:10,
      color: 'white',
      fontStyle:"italic",
      // marginBottom:20
    },
    errText:
    {
      marginBottom:20,
      fontSize:20,
      fontStyle:'italic',
      color:"red"
    },
    submitbtn:
    {
      display:'flex',
      flexDirection:'row',
      justifyContent:"center"
    },
    disabledgetbtnstyle:
    {
      borderRadius:20,
      backgroundColor:'grey',
      textAlign:"center",
      height:30,
      width:150,
      padding:5,
      marginLeft:20,
      marginTop:10,
    },
    getbtnstyle:
    {
      backgroundColor:'#4682B4',
      width:150,
      height:30,
      textAlign:'center',
      padding:5,
      marginLeft:20,
      marginTop:10,
      borderRadius:20
    },
    gettxt:
    {
        color:"white",
        fontSize:15,
        fontWeight:'bold'
    }
});

export default AddCar;