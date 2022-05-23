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
        name="ModalNavigator"
        component={ModalNavigator}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </RootStack.Navigator>
  );
};
export default RootNavigator;
