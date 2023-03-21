import { Text, View ,StyleSheet,Picker,Image, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import data from '../api/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons/faCodeCompare';
import { faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';


const CompareCars = ({navigation})=>{
  
    const[pickerValOne,setPickerValOne] = useState('Select Car Brand');
    const[pickerValTwo,setPickerValTwo] = useState('Select Car Brand');
    const[pickerOne,setPickerOne] = useState("Select Car");
    const[pickerTwo,setPickerTwo] = useState("Select Car");
    
    const[carOne,setCarOne] = useState([]);
    const[carTwo,setCarTwo] = useState([]);

    const[carIDOne,setCarIdOne] = useState("");
    const[carIDTwo,setCarIdTwo] = useState("");

    const comparebtn = ()=>{
        navigation.navigate('CompareCarsDetails',{brandnameone:pickerValOne,brandnametwo:pickerValTwo,idone:carIDOne,idtwo:carIDTwo});
    };

    useEffect(()=>{
      if(pickerValOne==='Tata')
      {
       setCarOne(data.VEHICLEDATA[0].Tata);
      }
      else if(pickerValOne==="Mahindra")
      {
        setCarOne(data.VEHICLEDATA[0].Mahindra);
      }
      else if(pickerValOne==="Hyundai")
      {
        setCarOne(data.VEHICLEDATA[0].Hyundai);
      }
      else if(pickerValOne==="Toyota")
      {
        setCarOne(data.VEHICLEDATA[0].Toyota);
      }
      else if(pickerValOne==="Suzuki")
      {
        setCarOne(data.VEHICLEDATA[0].Suzuki);
      }
      else if(pickerValOne==="BMW")
      {
        setCarOne(data.VEHICLEDATA[0].BMW);
      }
      if(pickerValTwo==='Tata')
      {
       setCarTwo(data.VEHICLEDATA[0].Tata);
      }
      else if(pickerValTwo==="Mahindra")
      {
        setCarTwo(data.VEHICLEDATA[0].Mahindra);
      }
      else if(pickerValTwo==="Hyundai")
      {
        setCarTwo(data.VEHICLEDATA[0].Hyundai);
      }
      else if(pickerValTwo==="Toyota")
      {
        setCarTwo(data.VEHICLEDATA[0].Toyota);
      }
      else if(pickerValTwo==="Suzuki")
      {
        setCarTwo(data.VEHICLEDATA[0].Suzuki);
      }
      else if(pickerValTwo==="BMW")
      {
        setCarTwo(data.VEHICLEDATA[0].BMW);
      }

    },[carOne,carTwo,pickerValOne,pickerValTwo]);

    return (
    <>
      <View style={style.maincontainer}>

        <View style={style.comparecontainer}>

        <View style={style.carcomparecontainer}>
            <View style={style.cariconcontainer}> 
             <Image source={require("../../assets/images/caricon.png")} style={style.cariconimage}/>               
            </View>
            <View>
               <Picker style={style.picker} selectedValue={pickerValOne} onValueChange={(val,ind)=>{setPickerValOne(val)}}>
                <Picker.Item label="Select Car Brand" value="select car Brand"/>
                <Picker.Item label="Tata" value="Tata"/>
                <Picker.Item label="Mahindra" value="Mahindra"/>
                <Picker.Item label="Hyundai" value="Hyundai"/>
                <Picker.Item label="Suzuki" value="Suzuki"/>
                <Picker.Item label="BMW" value="BMW"/>
                <Picker.Item label="Toyota" value="Toyota"/>
               </Picker>
            </View>
            <View style={{marginTop:20}}>
               <Picker style={style.picker} selectedValue={pickerOne} onValueChange={(val,ind)=>{setPickerOne(val);setCarIdOne(ind-1);}}>
                <Picker.Item label="Select Car" value="select car"/>
                {carOne.map((val,ind)=>(
                <Picker.Item key={ind} label={val.carname} value={val.carname}/>
                ))}
               </Picker>
            </View>
        </View>

        <View style={style.carcomparecontainer}>
            <View style={style.cariconcontainer}> 
             <Image source={require("../../assets/images/caricon.png")} style={style.cariconimage}/>               
            </View>
            <View>
               <Picker style={style.picker} selectedValue={pickerValTwo} onValueChange={(val,ind)=>{setPickerValTwo(val)}}>
                <Picker.Item label="Select Car Brand" value="select car"/>
                <Picker.Item label="Tata" value="Tata"/>
                <Picker.Item label="Mahindra" value="Mahindra"/>
                <Picker.Item label="Hyundai" value="Hyundai"/>
                <Picker.Item label="Suzuki" value="Suzuki"/>
                <Picker.Item label="BMW" value="BMW"/>
                <Picker.Item label="Toyota" value="Toyota"/>
               </Picker>
            </View>
            <View style={{marginTop:20}}>
               <Picker style={style.picker} selectedValue={pickerTwo} onValueChange={(val,ind)=>{setPickerTwo(val);setCarIdTwo(ind-1);}}>
                <Picker.Item label="Select Car" value="select car"/>
                {carTwo.map((val,ind)=>(
                <Picker.Item key={ind} label={val.carname} value={val.carname}/>
                ))}
               </Picker>
            </View>
        </View>

        </View>


        <View style={style.btncontainer}>
        <Pressable style={style.comparebtn}><Text style={style.comparetext} onPress={comparebtn}>Compare Cars</Text></Pressable>
        </View>

        <View style={style.bottomtab}>
          <View style={style.tabstyle}>
          <Pressable onPress={()=>{navigation.navigate("Home")}}><View><Text style={style.linkstyle}><FontAwesomeIcon icon={ faHouse } style={style.iconstyle} size={30}/></Text></View></Pressable>
          <Pressable onPress={()=>{navigation.navigate("CompareCars")}}><View><Text style={style.linkstyle}><FontAwesomeIcon icon={ faCodeCompare } size={30}/></Text></View></Pressable>
          </View>
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
        width:70,
        height:70,
        borderRadius:'50%',
        backgroundColor:"#4682B4",
        marginBottom:20,
        position:'relative'
    },
    cariconimage:
    {
        position:"absolute",
        width:70,
        height:70,
        borderRadius:"50%"
    },
    carcomparecontainer:
    {
        backgroundColor:'#1b1b1b',
        width:'50%',
        display:'flex',
        flexDirection:'column',
        alignItems:"center",
        paddingVertical:70,
        border:"solid",
        borderRadius:10,
        color:"#4682B4"
    },
    picker:
    {
        width:170,
        height:35,
        padding:3,
        borderWidth:2,
        backgroundColor:'#1b1b1b',
        borderColor:"#4682B4",
        color:"white",
        borderRadius:10
    },
    btncontainer:
    {
        display:"flex",
        justifyContent:"center",
        flexDirection:"row"
    },
    comparebtn:
    {
        width:150,
        height:40,
        backgroundColor:"#4682B4",
        textAlign:'center',
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
    },
    comparetext:
    {
        color:"white",
        fontSize:18,
        fontStyle:'bold',
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

export default CompareCars;