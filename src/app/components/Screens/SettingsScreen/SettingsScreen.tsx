import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Настройки</Text>
    </View>
  );
};

export default SettingsScreen;
