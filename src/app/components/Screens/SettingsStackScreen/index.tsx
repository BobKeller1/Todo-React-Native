import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SettingsScreen from '../SettingsScreen/SettingsScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name={'Settings'}
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

export default SettingsStackScreen;
