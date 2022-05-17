import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: '#a6c7ea',
      height: 90,
      marginBottom: 20,
    },
    headerText: {
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{`JUST DO
      IT`}</Text>
    </View>
  );
};

export default Header;
