import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Главная страница',
          headerStyle: {
            backgroundColor: '#beb9b9',
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
