import { Text, View ,StyleSheet,Image, ScrollView, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import data from '../api/data.json';
import { useRoute } from '@react-navigation/native';

const CompareCarsDetails = () => {

  const route = useRoute();

  const[specsVal,setSpecsVal] = useState(true);
  const[otherVal,setOtherVal] = useState(false);
  const[colorVal,setColorVal] = useState(false);

  const idOne = route.params.idone;
  const idTwo = route.params.idtwo;
  const brandone = route.params.brandnameone;
  const brandtwo = route.params.brandnametwo;
  const[carOneData,setCarOneData] = useState([]);
  const[carTwoData,setCarTwoData] = useState([]);

  useEffect(()=>{

    if(brandone==='Tata')
    {
     setCarOneData(data.VEHICLEDATA[0].Tata[idOne]);
    }
    else if(brandone==="Mahindra")
    {
      setCarOneData(data.VEHICLEDATA[0].Mahindra[idOne]);
    }
    else if(brandone==="Hyundai")
    {
      setCarOneData(data.VEHICLEDATA[0].Hyundai[idOne]);
    }
    else if(brandone==="Toyota")
    {
      setCarOneData(data.VEHICLEDATA[0].Toyota[idOne]);
    }
    else if(brandone==="Suzuki")
    {
      setCarOneData(data.VEHICLEDATA[0].Suzuki[idOne]);
    }
    else if(brandone==="BMW")
    {
      setCarOneData(data.VEHICLEDATA[0].BMW[idOne]);
    }
    if(brandtwo==='Tata')
    {
     setCarTwoData(data.VEHICLEDATA[0].Tata[idTwo]);
    }
    else if(brandtwo==="Mahindra")
    {
      setCarTwoData(data.VEHICLEDATA[0].Mahindra[idTwo]);
    }
    else if(brandtwo==="Hyundai")
    {
      setCarTwoData(data.VEHICLEDATA[0].Hyundai[idTwo]);
    }
    else if(brandtwo==="Toyota")
    {
      setCarTwoData(data.VEHICLEDATA[0].Toyota[idTwo]);
    }
    else if(brandtwo==="Suzuki")
    {
      setCarTwoData(data.VEHICLEDATA[0].Suzuki[idTwo]);
    }
    else if(brandtwo==="BMW")
    {
      setCarTwoData(data.VEHICLEDATA[0].BMW[idTwo]);
    }

  },[carOneData,carTwoData]);

  console.log(carOneData);
  console.log(carTwoData);

  return (
    <>
      <View style={style.maincontainer}>

            <View style={style.comparecontainer}>

            <View style={style.carcomparecontainer}>
                <View style={style.cariconcontainer}> 
                <Image source={{uri:`${carOneData.carposter}`}} style={style.cariconimage}/>               
                </View>
                <View>
                   <Text style={style.carnametext}>{carOneData.carname}</Text>
                </View>
            </View>

            <View style={style.carcomparecontainer}>
            <View style={style.cariconcontainer}> 
                <Image source={{uri:`${carTwoData.carposter}`}} style={style.cariconimage}/>               
                </View>
                <View>
                <Text style={style.carnametext}>{carTwoData.carname}</Text>
                <Text style={style.carnametext}>{carTwoData.price}</Text>
                </View>
            </View>

            </View>

            <View style={style.comparedetails}>

                <View style={style.scrollcontainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Pressable onPress={()=>{setSpecsVal(true);setOtherVal(false);setColorVal(false)}}><View style={style.scrollitem}><Text style={style.itemheading}>Specification</Text></View></Pressable>
                        <Pressable onPress={()=>{setOtherVal(true);setSpecsVal(false);setColorVal(false)}}><View style={style.scrollitem}><Text style={style.itemheading}>Other</Text></View></Pressable>
                        <Pressable onPress={()=>{setColorVal(true);setOtherVal(false);setSpecsVal(false)}}><View style={style.scrollitem}><Text style={style.itemheading}>Colors</Text></View></Pressable>
                    </ScrollView>
                </View>

                {specsVal?
                <View style={style.detailscontainer}>
                   <Text style={style.detailheading}>Engine & Transmission</Text>
                   <Text style={style.subheadig}>Engine</Text>
                   <View style={style.detailrow}>
                       <View style={style.detailvalues}><Text style={style.deatilval}>{carOneData.engine}</Text></View>
                       <View style={style.detailvalues}><Text style={style.deatilval}>{carTwoData.engine}</Text></View>
                   </View>
                   <Text style={style.subheadig}>Transmission</Text>
                   <View style={style.detailrow}>
                       <View style={style.detailvalues}><Text style={style.deatilval}>{carOneData.transmission}</Text></View>
                       <View style={style.detailvalues}><Text style={style.deatilval}>{carTwoData.transmission}</Text></View>
                   </View>
                   <Text style={style.subheadig}>Fuel Type</Text>
                   <View style={style.detailrow}>
                       <View style={style.detailvalues}><Text style={style.deatilval}>{carOneData.fueltype}</Text></View>
                       <View style={style.detailvalues}><Text style={style.deatilval}>{carTwoData.fueltype}</Text></View>
                   </View>
                </View>
                :otherVal ?                 
                <View style={style.detailscontainer}>
                    <Text style={style.detailheading}>Other</Text>
                    <Text style={style.subheadig}>DriveTrain</Text>
                    <View style={style.detailrow}>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carOneData.drivetrain}</Text></View>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carTwoData.drivetrain}</Text></View>
                    </View>
                    <Text style={style.subheadig}>Mileage</Text>
                    <View style={style.detailrow}>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carOneData.mileage}</Text></View>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carTwoData.mileage}</Text></View>
                    </View>
                    <Text style={style.subheadig}>Seating Capacity</Text>
                    <View style={style.detailrow}>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carOneData.seatingcapacity}</Text></View>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carTwoData.seatingcapacity}</Text></View>
                    </View>
                    <Text style={style.subheadig}>Emission Standard</Text>
                    <View style={style.detailrow}>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carOneData.EmissionStandard}</Text></View>
                        <View style={style.detailvalues}><Text style={style.deatilval}>{carTwoData.EmissionStandard}</Text></View>
                    </View>
                </View> 
                :
                <View style={style.detailscontainer}>
                    <Text style={style.detailheading}>Colors</Text>
                    <Text style={style.subheadig}>red</Text>
                </View>
                }


            </View>

      </View>
    </>
  );
};


const style = StyleSheet.create({

    maincontainer:
    {
        backgroundColor:"#1b1b1b",
        height:'100%',
    },
    comparecontainer:
    {
        display:"flex",
        flexDirection:'row',
        width:'100%',
        padding:10,
        marginVertical:20
    },
    cariconcontainer:
    {
        width:180,
        height:200,
        borderRadius:10,
        marginBottom:20,
    },
    cariconimage:
    {
        width:180,
        height:200,
        borderRadius:10
    },
    carnametext:
    {
      color:"#4682B4",
      fontSize:20,
      fontWeight:"bold"
    },
    carcomparecontainer:
    {
        backgroundColor:'#1b1b1b',
        width:'50%',
        display:'flex',
        flexDirection:'column',
        alignItems:"center",
        paddingVertical:30,
        border:"solid",
        borderRadius:10,
        color:"#4682B4"
    },
    comparedetails:
    {
       height:'100%',
       backgroundColor:"#1b1b1b"
    },
    scrollcontainer:
    {
        width:'100%',
        height:80,
        paddingHorizontal:20
    },
    scrollitem:
    {
        width:150,
        height:40,
        padding:5,
        border:'solid',
        borderColor:"#4682B4",
        borderRadius:10,
        color:'#4682B4',
        textAlign:'center',
        marginRight:20
    },
    itemheading:
    {
        color:'white',
        fontSize:18,
        fontWeight:"bold"
    },
    detailscontainer:
    {
        paddingHorizontal:20
    },
    detailheading:
    {
        color:"white",
        fontSize:22,
        fontWeight:"bold",
    },
    subheadig:
    {
       color:"grey",
       fontSize:18,
       fontWeight:"600",
       marginTop:10
    },
    detailrow:
    {
        display:"flex",
        flexDirection:'row',
        marginTop:5
    },
    detailvalues:
    {
        width:'50%',
        height:40,
        border:'solid',
        borderColor:'#4682B4',
        color:'#4682B4',
        marginRight:5,
        borderRadius:10,
        textAlign:"center",
        display:'flex',
        justifyContent:"center"   
    },
    deatilval:
    {
        color:'#4682B4',
        fontSize:16,
        fontWeight:'700'
    }
    
});

export default CompareCarsDetails;