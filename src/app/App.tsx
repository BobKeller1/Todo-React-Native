import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './components/Screens/HomeStackScreen';
import SettingsStackScreen from './components/Screens/SettingsStackScreen';

export interface ITodoItem {
  title: string;
  description: string;
  date: string;
  id: string;
  status: boolean;
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name={'HomeScreen'} component={HomeStackScreen} />
        <Tab.Screen name={'SettingsScreen'} component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
