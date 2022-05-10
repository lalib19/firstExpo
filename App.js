import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      
      <StatusBar style="auto" />
     <View style={styles.container2}>
     
      </View>
      <View style={styles.container3}>
      
      </View>
      <View style={styles.container4}>
      
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
   
  },
  container2: {
    flex: 2,
    backgroundColor: "green",
  },
  container3: {
    flex:1,
    backgroundColor: "red",
  },
  container4: {
    flex:4,
    backgroundColor: "blue",
}
});
