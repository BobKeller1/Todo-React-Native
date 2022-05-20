import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import SettingsNavigator from '../SettingsNavigator';
import HomeNavigator from '../HomeNavigator';

const TabBarStack = createBottomTabNavigator();

const TabBarNavigator = () => {
  return (
    <TabBarStack.Navigator screenOptions={{headerShown: false}}>
      <TabBarStack.Screen name={'Home'} component={HomeNavigator} />
      <TabBarStack.Screen name={'Settings'} component={SettingsNavigator} />
    </TabBarStack.Navigator>
  );
};
export default TabBarNavigator;
