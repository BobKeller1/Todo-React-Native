import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalScreen from '../components/Screens/ModalScreen';

const ModalStack = createNativeStackNavigator();
const ModalNavigator = () => {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen name={'ModalScreen'} component={ModalScreen} />
    </ModalStack.Navigator>
  );
};

export default ModalNavigator;
