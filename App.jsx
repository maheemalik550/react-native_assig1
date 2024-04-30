import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>hello world</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue', // Set your desired background color here
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Set your desired text color here
  },
});

export default App;