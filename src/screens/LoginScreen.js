import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View ,TouchableOpacity } from 'react-native';
import axios from 'axios';

const LoginScreen = ({navigation}) => {

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[disval,setDisVal] = useState(true);
 
  const[emailErr,setEmailErr] = useState("");
  const[passErr,setPassErr] = useState("");
 
  const checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const emailblur = ()=>
  {
     if(email==="")
     {
         setEmailErr("Enter Email Id");
     }
     else
     {
         if(email.match(checkEmail))
         {
             setEmailErr("");
         }
         else
         {
             setEmailErr("Invalid Email");
         }
     }
 
  }
  const passblur = ()=>
  {
     if(password==="")
     {
         setPassErr("Enter Password");
     }
     else
     {
         if(password.match(passCheck))
         {
             setPassErr("");
         }
         else
         {
             setPassErr("Minimum eight characters At least one letter One number One special character");
         }
     }
 
  }
  const loginbtn = () =>
  {
     if(email==="")
     {
        setEmailErr("Enter Email-Id");
     }
     if(password==="")
     {
        setPassErr("Enter Password");
     }
 
     axios.post("http://localhost:5000/login",{
         email,
         password
      })
      .then((data)=>{
       console.log(data.data);
       if(data.data.status===200)
       {
          navigation.navigate("Home");
       }
      })
  };

  useEffect(()=>{

    if(email==="")
    {
        setDisVal(true);
    }
    else if(email.match(checkEmail))
    {
        setDisVal(false);
        setEmailErr("");
    }
    else
    {
       setDisVal(true);
    }

    if(password==="")
    {
        setDisVal(true);
    }
    else if(password.match(passCheck))
    {
        setDisVal(false);
        setPassErr("");
    }
    else
    {
       setDisVal(true);
    }
 },[email,password,checkEmail,passCheck,emailErr,passErr])

  return (
    <>
    <View style={styles.loginmaincontainer}>

        <Text style={styles.mainheading}>Login</Text>

        <View  style={styles.logincard}>

        <Text style={styles.inputheading}>Email-Id</Text>
        <TextInput style={styles.inputbox}
        placeholder='Enter Email-Id' onChange={(e)=>setEmail(e.target.value)} onBlur={emailblur}/>
        <Text style={styles.errText}>{emailErr}</Text>

        <Text style={styles.inputheading}>Password</Text>
        <TextInput style={styles.inputbox}
        placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} onBlur={passblur}/>
        <Text style={styles.errText}>{passErr}</Text>

        {!disval?
        <TouchableOpacity style={styles.loginbtn} disabled={disval} onPress={loginbtn}>Login</TouchableOpacity>
        :<TouchableOpacity style={styles.loginbtndiabled} disabled={disval} onPress={loginbtn}>Login</TouchableOpacity>
         }
        <Text style={styles.navigateheading} onPress={()=>navigation.navigate("Register")}>New User?</Text>
      
       </View>

    </View>
    </>
  );
};


const styles = StyleSheet.create({
  loginmaincontainer:
  {
    backgroundColor:"#1B1B1B",
    width:'100vw',
    height:'100%'
  },
  mainheading:
  {
    fontSize:40,
    color:"#4682B4",
    fontWeight:"bold",
    textAlign: "center",
    marginTop: 200
  },
  logincard:
  {
    marginVertical: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20
  },
  inputheading:
  {
    fontSize:25,
    fontWeight:'bold',
    color:"#4682B4"
  },
  inputbox:
  {
    borderStyle:"solid",
    borderColor:"#4682B4",
    borderRadius:10,
    borderWidth:2,
    height:50,
    fontSize:20,
    padding:10,
    color: 'white',
    fontStyle:"italic",
  },
  loginbtn:
  {
    borderRadius:10,
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'#4682B4',
    textAlign:"center",
    height:40,
    display:'flex',
    justifyContent:"center",
    color:'white',
  },
  navigateheading:
  {
      fontSize:18,
      color:'white',
      marginTop:10,
      textAlign:"center",
      fontStyle:"italic"
  },
  loginbtndiabled:
  {
    borderRadius:10,
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'grey',
    textAlign:"center",
    height:40,
    display:'flex',
    justifyContent:"center",
    color:'white',
  },
  errText:
  {
    marginBottom:25,
    fontSize:20,
    fontStyle:'italic',
    color:"red"
  }
});

export default LoginScreen;