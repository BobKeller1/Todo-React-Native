import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ModalNavigator from '../ModalNavigator';
import TabBarNavigator from '../TabBarNavigator';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  const navigation = useNavigation();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabBarNavigator"
        component={TabBarNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        options={{
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#beb9b9',
          },
          headerLeft: () => (
            <Button onPress={() => navigation.goBack()} title="Назад" />
          ),
          title: 'Добавить задачу',
        }}
        name="Modal"
        component={ModalNavigator}
      />
    </RootStack.Navigator>
  );
};
export default RootNavigator;
