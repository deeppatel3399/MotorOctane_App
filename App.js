import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import LoginScreen from './src/screens/LoginScreen.js';
import RegisterScreen from './src/screens/RegisterScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register"component={RegisterScreen}/>
        <Stack.Screen name="Home"component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
