import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalScreen from '../../../screens/ModalScreen';

const ModalStack = createNativeStackNavigator();
const ModalNavigator = () => {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen
        name={'ModalScreen'}
        component={ModalScreen}
        options={{headerShown: false}}
      />
    </ModalStack.Navigator>
  );
};

export default ModalNavigator;