import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../components/Screens/HomeStackScreen';
import SettingsStackScreen from '../components/Screens/SettingsStackScreen';
import React from 'react';

const TabBarStack = createBottomTabNavigator();

const TabBarNavigator = () => {
  return (
    <TabBarStack.Navigator screenOptions={{headerShown: false}}>
      <TabBarStack.Screen name={'Home'} component={HomeStackScreen} />
      <TabBarStack.Screen name={'Settings'} component={SettingsStackScreen} />
    </TabBarStack.Navigator>
  );
};
export default TabBarNavigator;
