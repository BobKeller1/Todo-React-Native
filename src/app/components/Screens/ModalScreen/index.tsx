import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ModalScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Modal Window</Text>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ModalScreen;
