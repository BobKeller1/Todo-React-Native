import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ModalNavigator from './ModalNavigator';
import TabBarNavigator from './TabBarNavigator';

const MainStack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="TabBarNavigator"
        component={TabBarNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        options={{
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#beb9b9',
          },
        }}
        name="Modal"
        component={ModalNavigator}
      />
    </MainStack.Navigator>
  );
};
export default MainNavigator;
