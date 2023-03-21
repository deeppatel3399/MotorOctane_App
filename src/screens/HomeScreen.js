import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import data from '../api/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons/faCodeCompare';
import { faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';

const HomeScreen = ({navigation}) =>{

  const[carData,setCarData] = useState(data.VEHICLEDATA[0].Tata);
  const[brandName,setBrandName] = useState('Tata');

  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>

        <View>

        <Text style={styles.brandheading}>Brands</Text>
        <ScrollView horizontal={true} style={styles.brandscontainer} showsHorizontalScrollIndicator={false}>

        <Pressable onPress={()=>{
          setCarData(data.VEHICLEDATA[0].Tata);
          setBrandName('Tata');
        }}>
        <View style={styles.brandlogocard}>
          <Image style={styles.brandlogostyle} source={require("../../assets/images/tata.png")}/>
        </View>
        </Pressable>

        <Pressable onPress={()=>{
          setCarData(data.VEHICLEDATA[0].Mahindra);
          setBrandName('Mahindra');
        }}>
        <View style={styles.brandlogocard}>
        <Image style={styles.brandlogostyle} source={require("../../assets/images/mahindra.png")}/>
        </View>
        </Pressable>

        <Pressable onPress={()=>{
          setCarData(data.VEHICLEDATA[0].Hyundai);
          setBrandName('Hyundai');
        }}>
        <View style={styles.brandlogocard}>
        <Image style={styles.brandlogostyle} source={require("../../assets/images/hyundai.png")}/>
        </View>
        </Pressable>
        
        <Pressable onPress={()=>{
          setCarData(data.VEHICLEDATA[0].BMW);
          setBrandName('BMW');
        }}>
        <View style={styles.brandlogocard}>
        <Image style={styles.brandlogostyle} source={require("../../assets/images/bmw.png")}/>
        </View>
        </Pressable>


        <Pressable onPress={()=>{
          setCarData(data.VEHICLEDATA[0].Suzuki);
          setBrandName('Suzuki');
        }}>
        <View style={styles.brandlogocard}>
        <Image style={styles.brandlogostyle} source={require("../../assets/images/suzuki.png")}/>
        </View>
        </Pressable>

        <Pressable onPress={()=>{
          setCarData(data.VEHICLEDATA[0].Toyota);
          setBrandName('Toyota');
        }}>
        <View style={styles.brandlogocard}>
        <Image style={styles.brandlogostyle} source={require("../../assets/images/toyota.png")}/>
        </View>
        </Pressable>


        </ScrollView>

        </View>

        <View>

        <Text style={styles.brandnameheading}>{brandName} Cars</Text>

        <ScrollView style={styles.carscontainer}>

          {carData.map((val,ind)=>(
          <View style={styles.carcard} key={ind}>
        
          <Image style={styles.carimage} source={{uri:`${val.carposter}`}}/>

          <Text style={styles.carnametext}>{val.carname}</Text>

          <Text style={styles.carpricetext}>{val.price}</Text>

          <Pressable style={styles.morebtnstyle} 
          onPress={()=>{
            navigation.navigate('CarsDetail',{id:ind,name:brandName})
          }}><Text style={styles.morebtntext}>More</Text></Pressable>
           </View>
          ))}
  
        </ScrollView>

        </View>

      </View>
      <View style={styles.bottomtab}>
          <View style={styles.tabstyle}>
          <Pressable onPress={()=>{navigation.navigate("Home")}}><View><Text style={styles.linkstyle}><FontAwesomeIcon icon={ faHouse } style={styles.iconstyle} size={30}/></Text></View></Pressable>
          <Pressable onPress={()=>{navigation.navigate("CompareCars")}}><View><Text style={styles.linkstyle}><FontAwesomeIcon icon={ faCodeCompare } size={30}/></Text></View></Pressable>
          </View>
      </View>
    
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1B1B',
    height:'100'
  },
  headingtext:{
    fontSize:40,
    color:"#4682B4",
    fontWeight:"bold",
    textAlign: "center",
    marginTop: 120
  },
  searchbar:
  {
     backgroundColor:"white",
     marginHorizontal:10,
     marginVertical:10,
     height:40,
     padding:10,
     color:"black",
     fontSize:16,
     fontWeight:500,
     borderRadius:10
  },
  brandheading:
  {
    marginHorizontal:20,
    color:"#4682B4",
    fontSize:30,
    fontWeight:"bold"

  },
  brandscontainer:{
    paddingHorizontal:20,
    marginTop:10,
    marginBottom:20,
    paddingVertical:10
  },
  brandlogocard:
  {
    width:100,
    height:100,
    backgroundColor:'white',
    marginRight:10,
    borderRadius:50,
    display:'flex',
    justifyContent:"center",
    textAlign:'center',
    position:'relative',
  },
  brandlogostyle:
  {
    width:75,
    height:60,
    position: 'absolute',
    left:13
  },
  brannametitle:{
    color:"black"
  },
  brandnameheading:
  {
     color:"#4682B4",
     fontSize:30,
     fontWeight:"bold",
     textAlign:'center',
     marginEnd:10
  },
  carscontainer:
  {
    paddingHorizontal:20,
    marginTop:20
  },
  carcard:
  {
    width:'100%',
    height:270,
    backgroundColor:"#4682B4",
    borderRadius:10,
    padding:10,
    marginBottom:20
  },
  carimage:
  {
    width:"100%",
    height:150,
    borderRadius:10
  },
  carnametext:
  {
     color:'white',
     fontSize:22,
     fontWeight:'bold',
     marginVertical:5,
     marginHorizontal:5
  },
  carpricetext:
  {
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    marginHorizontal:5
  },
  morebtnstyle:
  {
    backgroundColor:"#1B1B1B",
    width:100,
    height:30,
    borderRadius:50,
    textAlign:"center",
    justifyContent:'center',
    marginVertical:3
  },
  morebtntext:
  {
    color:"#4682B4",
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  },
  bottomtab:
  {
    position:'fixed',
    width:"100%",
    bottom:'0%'
  },
  tabstyle:{
    backgroundColor:'#4682B4',
    width:"100%",
    height:50,
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-around",
    zIndex:999,
    alignItems:'center'
},
linkstyle:
{
    fontSize:30,
    fontWeight:"bold",
    color:'white'
},
});


export default HomeScreen;
