import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () =>{
  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headingtext}>Home Screen</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1B1B',
  },
  headingtext:{
    fontSize:40,
    color:"#4682B4",
    fontWeight:"bold",
    textAlign: "center",
    marginTop: 120
  }
});


export default HomeScreen;
