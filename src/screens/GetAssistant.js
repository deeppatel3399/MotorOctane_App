import { View, Text,StyleSheet, TextInput,Pressable } from 'react-native';
import React from 'react';

const GetAssistant = () => {
  return (
    <>
    <View style={styles.maincontainer}>

        <Text style={styles.heading}>Get Assistance</Text>

        <View style={styles.formcontainer}>
                <Text style={styles.inputheading}>Full Name</Text>
                <TextInput style={styles.inputbox}
                placeholder='Enter Your Full Name' 
                // onChange={(e)=>setEmail(e.target.value)} onBlur={emailblur}
                />
                <Text style={styles.inputheading}>Phone No.</Text>
                <TextInput style={styles.inputbox}
                placeholder='Phone Number' 
                // onChange={(e)=>setEmail(e.target.value)} onBlur={emailblur}
                />
        </View>

        <Pressable style={styles.submitbtn}><View style={styles.getbtnstyle}><Text style={styles.gettxt}>Submit</Text></View></Pressable>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
    maincontainer:
    {
        backgroundColor:'#1b1b1b',
        height:"100%"
    },
    heading:
    {
       color:'white',
       fontSize:23,
       fontWeight:'bold',
       textAlign:'center',
       marginTop:20
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
      marginBottom:20
    },
    submitbtn:
    {
      display:'flex',
      flexDirection:'row',
      justifyContent:"center"
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

export default GetAssistant;