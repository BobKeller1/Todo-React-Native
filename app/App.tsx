import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  TextWrapper: {
    textAlign: 'center',
    marginTop: 30,
  },
  BoldText: {
    fontWeight: 'bold',
  },
  RedText: {
    color: 'red',
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.TextWrapper}>
        <Text style={styles.BoldText}>Hello</Text>,{' '}
        <Text style={styles.RedText}>World!</Text>
      </Text>
    </SafeAreaView>
  );
};

export default App;
