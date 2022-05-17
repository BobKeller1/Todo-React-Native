import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../HomeScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'Home'}
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

export default HomeStackScreen;
