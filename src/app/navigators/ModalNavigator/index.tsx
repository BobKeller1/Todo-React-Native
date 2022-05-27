import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoNameScreen from '../../../screens/TodoNameScreen';
import TodoDescriptionScreen from '../../../screens/TodoDescriptionScreen';
import TodoDateScreen from '../../../screens/TodoDateScreen';

const ModalStack = createNativeStackNavigator();
const ModalNavigator = () => {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen name={'ScreenName'} component={TodoNameScreen} />
      <ModalStack.Screen
        name={'ScreenDescription'}
        component={TodoDescriptionScreen}
      />
      <ModalStack.Screen name={'ScreenDate'} component={TodoDateScreen} />
    </ModalStack.Navigator>
  );
};

export default ModalNavigator;
