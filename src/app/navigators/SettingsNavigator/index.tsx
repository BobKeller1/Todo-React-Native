import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SettingsScreen from '../../../screens/SettingsScreen/SettingsScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name={'SettingsScreen'}
        component={SettingsScreen}
        options={{
          title: 'Настройки',
          headerStyle: {
            backgroundColor: '#beb9b9',
          },
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
