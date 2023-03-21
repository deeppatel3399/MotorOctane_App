import { View, Text,StyleSheet, ScrollView,Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import data from '../api/data.json';
import { useRoute } from '@react-navigation/native';

const CarDetailScreen = ({navigation}) => {

  const route = useRoute();

  const[carData,setCarData] = useState([]);
  const carId = route.params.id;
  const brandame = route.params.name;
  const[color,setColor] = useState([]);
  const[mileage,setMileage] = useState([]);


  useEffect(()=>{
    if(brandame==='Tata')
    {
        setCarData(data.VEHICLEDATA[0].Tata[carId]);
        setColor(data.VEHICLEDATA[0].Tata[carId].colour);
        setMileage(data.VEHICLEDATA[0].Tata[carId].mileages);
    }
    else if(brandame==='Mahindra')
    {
        setCarData(data.VEHICLEDATA[0].Mahindra[carId]);
        setColor(data.VEHICLEDATA[0].Mahindra[carId].colour);
        setMileage(data.VEHICLEDATA[0].Mahindra[carId].mileages);
    }
    else if(brandame==="Hyundai")
    {
        setCarData(data.VEHICLEDATA[0].Hyundai[carId]);
        setColor(data.VEHICLEDATA[0].Hyundai[carId].colour);
        setMileage(data.VEHICLEDATA[0].Hyundai[carId].mileages);
    }
    else if(brandame==="BMW")
    {
        setCarData(data.VEHICLEDATA[0].BMW[carId]);
        setColor(data.VEHICLEDATA[0].BMW[carId].colour);
        setMileage(data.VEHICLEDATA[0].BMW[carId].mileages);
    }
    else if(brandame==="Suzuki")
    {
        setCarData(data.VEHICLEDATA[0].Suzuki[carId]);
        setColor(data.VEHICLEDATA[0].Suzuki[carId].colour);
        setMileage(data.VEHICLEDATA[0].Suzuki[carId].mileages);
    }
    else if(brandame==="Toyota")
    {
        setCarData(data.VEHICLEDATA[0].Toyota[carId]);
        setColor(data.VEHICLEDATA[0].Toyota[carId].colour);
        setMileage(data.VEHICLEDATA[0].Toyota[carId].mileages);
    }
  },[carData]);

  return (
    <>
    <View style={styles.maincontainer}>

        <View style={styles.imagecontainer}>
            <Image 
            source={{uri:`${carData.carposter}`}} style={styles.carimage}/>
        </View>

        <View>
            <Text style={styles.carname}>{carData.carname}</Text>
            <Text style={styles.carprice}>{carData.price}</Text>
        </View>

        <Pressable onPress={()=>{navigation.navigate("Get")}}><View style={styles.getbtnstyle}><Text style={styles.gettxt}>Get Assistance</Text></View></Pressable>

        <View style={styles.keyspecscontainer}>
            <Text style={styles.keyheading}>Key Specifications</Text>

            <View>

                <View style={styles.specsrow}>

                    <View style={styles.rowcolspecs}>
                        <Text style={styles.spectitle}>Price</Text>
                        <Text style={styles.specval}>{carData.price}</Text>
                    </View>

                    <View style={styles.rowcolspecs}>
                        <Text style={styles.spectitle}>Mileage</Text>
                        <Text style={styles.specval}>{carData.mileage}</Text>
                    </View>

                </View>
                <View style={styles.specsrow}>

                    <View style={styles.rowcolspecs}>
                        <Text style={styles.spectitle}>Engine</Text>
                        <Text style={styles.specval}>{carData.engine}</Text>
                    </View>

                    <View style={styles.rowcolspecs}>
                        <Text style={styles.spectitle}>Transmission</Text>
                        <Text style={styles.specval}>{carData.transmission}</Text>
                    </View>

                </View>
                <View style={styles.specsrow}>

                    <View style={styles.rowcolspecs}>
                        <Text style={styles.spectitle}>Fuel Type</Text>
                        <Text style={styles.specval}>{carData.fueltype}</Text>
                    </View>

                    <View style={styles.rowcolspecs}>
                        <Text style={styles.spectitle}>Seating Capacity</Text>
                        <Text style={styles.specval}>{carData.seatingcapacity}</Text>
                    </View>

                </View>
                
            </View>

        </View>

        <View>
            <Text style={styles.colortext}>Colors</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.colorscroll}>
                {color.map((val,ind)=>(
                    <View key={ind} style={styles.colorcontainer}>
                    <View style={styles.colorround}></View>
                    <Text style={styles.colorname}>{val.colorname}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

        <View>
            <Text style={styles.mileageheading}>Mileage</Text>

            {mileage.map((val,ind)=>(

                <View key={ind} style={styles.mileagecontainer}>
                <View style={styles.mileagerow}><Text style={styles.mileagetag}>kmpl</Text><Text style={styles.mileagetagval}>{val.kmpl}</Text></View>
                <View style={styles.mileagerow}><Text style={styles.mileagetag}>Varient</Text><Text style={styles.mileagetagval}>{val.varient}</Text></View>
                <View style={styles.mileagerow}><Text style={styles.mileagetag}>Fuel Type</Text><Text style={styles.mileagetagval}>{val.fueltype}</Text></View>
                </View>

            ))}
 
        </View>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
    maincontainer:
    {
        backgroundColor:"#1b1b1b",
        height:"100",
    },
    imagecontainer:
    {
    },
    carimage:
    {
        width:'100',
        height:250,
        borderRadius:20
    },
    carname:
    {
        color:"#4682B4",
        marginHorizontal:20,
        marginVertical:10,
        fontSize:20,
        fontWeight:'bold'
    },
    carprice:
    {
        color:"#4682B4",
        marginHorizontal:20,
        fontSize:20,
        fontWeight:'bold'
    },
    keyspecscontainer:
    {
        marginVertical:20,
        paddingHorizontal:10
    },
    keyheading:
    {
        textAlign:'center',
        color:"white",
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20
    },
    specsrow:
    {
        display:'flex',
        flexDirection:'row',
    },
    rowcolspecs:
    {
        textAlign:"center",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:"50%",
        borderStyle:'solid',
        borderColor:"#4682B4",
        borderWidth:1,
        borderRadius:5,
        height:100
    },
    spectitle:
    {
        color:'#4682B4',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:3
    },
    specval:
    {
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    colorscroll:
    {
        paddingHorizontal:20
    },
    colortext:
    {
        fontSize:25,
        fontWeight:"bold",
        marginHorizontal:20,
        marginVertical:20,
        color:'white'
    },
    colorcontainer:
    {
        display:'flex',
        flexDirection:'column',
        marginRight:20
    },
    colorround:
    {
        width:70,
        height:70,
        backgroundColor:'red',
        borderRadius:"50%"
    },
    colorname:
    {
        color:"white",
        fontSize:18,
        fontWeight:'600'
    },
    mileageheading:
    {
        color:"white",
        fontSize:25,
        fontWeight:'bold',
        textAlign:"center",
        marginTop:50
    },
    mileagecontainer:
    {
        display:'flex',
        flexDirection:"row",
        paddingHorizontal:20,
        marginVertical:10,
    },
    mileagerow:
    {
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        borderStyle:"solid",
        borderWidth:1,
        width:"33%",
        borderColor:'#4682B4',
        height:100,
        textAlign:"center"
    },
    mileagetag:
    {
        color:"#4682B4",
        fontSize:20,
        fontWeight:"bold"
    },
    mileagetagval:
    {
        color:"white",
        fontSize:16,
        fontWeight:'700'
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

})

export default CarDetailScreen;