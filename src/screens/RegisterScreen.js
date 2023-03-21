import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {

  const[fname,setFName] = useState("");
  const[lname,setLName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const[disval,setDisVal] = useState(true);

  const[emailErr,setEmailErr] = useState("");
  const[passErr,setPassErr] = useState("");
  const[fNameErr,setFNameErr] = useState("");
  const[lNameErr,setLNameErr] = useState("");

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
  const fnameblur = ()=>
  {
     if(fname==="")
     {
         setFNameErr("Enter FirstName");
     } 
  }
  const lnameblur = ()=>
  {
     if(lname==="")
     {
         setLNameErr("Enter Last Name");
     }
  }
  const registerbtn = () =>
  {
     if(email==="")
     {
        setEmailErr("Enter Email-Id");
     }
     if(password==="")
     {
        setPassErr("Enter Password");
     }
     if(fname==="" || lname==="")
     {
        setDisVal(true);
     }

     axios.post("http://localhost:5000/register",{
        fname,
        lname,
        email,
        password
     })
     .then((data)=>{
      if(data.data.status===200)
      {
        navigation.navigate("Login")
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

    if(fname!=="")
    {
        setFNameErr("");
    }
    if(lname!=="")
    {
        setLNameErr("");
    }
 
  },[email,password,checkEmail,passCheck,fname,lname,fNameErr,lNameErr])



  return (
    <>
    <View style={styles.registermaincontainer}>

        <Text style={styles.mainheading}>Register</Text>

        <View  style={styles.registercard}>

        <Text style={styles.inputheading}>First Name</Text>
        <TextInput style={styles.inputbox}
        placeholder='Enter First Name' onChange={(e)=>setFName(e.target.value)} onBlur={fnameblur}/>
        <Text style={styles.errText}>{fNameErr}</Text>

        <Text style={styles.inputheading}>Last Name</Text>
        <TextInput style={styles.inputbox}
        placeholder='Enter Last Name' onChange={(e)=>setLName(e.target.value)} onBlur={lnameblur}/>
        <Text style={styles.errText}>{lNameErr}</Text>


        <Text style={styles.inputheading}>Email-Id</Text>
        <TextInput style={styles.inputbox}
        placeholder='Enter Email-Id' onChange={(e)=>setEmail(e.target.value)} onBlur={emailblur}/>
        <Text style={styles.errText}>{emailErr}</Text>


        <Text style={styles.inputheading}>Password</Text>
        <TextInput style={styles.inputbox}
        placeholder='Enter Password' secureTextEntry={true} onChange={(e)=>setPassword(e.target.value)} onBlur={passblur}/>
        <Text style={styles.errText}>{passErr}</Text>

       {!disval?
        <Pressable style={styles.registerbtn} onPress={registerbtn} disabled={disval}>Register</Pressable>:
        <Pressable style={styles.registerbtndiabled} onPress={registerbtn} disabled={disval}>Register</Pressable>
       }

        <Text style={styles.navigateheading} onPress={()=>navigation.navigate("Login")}>Already Have an Account?</Text>
      
       </View>

    </View>
    </>
  );
};


const styles = StyleSheet.create({
  registermaincontainer:
  {
    backgroundColor:"#1B1B1B",
    height:'100vh'
  },
  mainheading:
  {
    fontSize:40,
    color:"#4682B4",
    fontWeight:"bold",
    textAlign: "center",
    marginTop: 70
  },
  registercard:
  {
    marginVertical: 20,
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
  errText:
  {
    marginBottom:25,
    fontSize:20,
    fontStyle:'italic',
    color:"red"
  },
  registerbtn:
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
  registerbtndiabled:{
    borderRadius:10,
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'grey',
    textAlign:"center",
    height:40,
    display:'flex',
    justifyContent:"center",
    color:'white',
  }
  

});

export default RegisterScreen;