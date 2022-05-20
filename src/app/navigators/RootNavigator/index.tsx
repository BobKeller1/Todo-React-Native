import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ModalNavigator from '../ModalNavigator';
import TabBarNavigator from '../TabBarNavigator';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabBarNavigator"
        component={TabBarNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        options={{
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#beb9b9',
          },
        }}
        name="Modal"
        component={ModalNavigator}
      />
    </RootStack.Navigator>
  );
};
export default RootNavigator;
