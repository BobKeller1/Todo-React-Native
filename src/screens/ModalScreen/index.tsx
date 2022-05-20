import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

const ModalScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Modal Window</Text>
      <Button title={'Go Back'} onPress={navigation.goBack} />
    </View>
  );
};

export default ModalScreen;
