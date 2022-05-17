import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './components/Screens/HomeScreen';

export interface ITodoItem {
  title: string;
  description: string;
  date: string;
  id: string;
  status: boolean;
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            title: 'Главный экран',
            headerStyle: {
              backgroundColor: '#b9b8b8',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
