import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigators/MainNavigator';

export interface ITodoItem {
  title: string;
  description: string;
  date: string;
  id: string;
  status: boolean;
}

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
