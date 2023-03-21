import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import LoginScreen from './src/screens/LoginScreen.js';
import RegisterScreen from './src/screens/RegisterScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import CarDetailScreen from './src/screens/CarDetailScreen.js';
import CompareCars from './src/screens/CompareCars.js';
import CompareCarsDetails from './src/screens/CompareCarsDetails.js';
import GetAssistant from './src/screens/GetAssistant.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <>
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='CarsDetail' component={CarDetailScreen}/>
        <Stack.Screen name='CompareCars' component={CompareCars}/>
        <Stack.Screen name='CompareCarsDetails' component={CompareCarsDetails}/>
        <Stack.Screen name='Get' component={GetAssistant}/>
      </Stack.Navigator>

    </NavigationContainer>
    </>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
