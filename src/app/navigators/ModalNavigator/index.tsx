import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalScreenName from '../../../screens/ModalScreen/ModalScreenName';
import ModalScreenDescription from '../../../screens/ModalScreen/ModalScreenDescription';
import ModalScreenDate from '../../../screens/ModalScreen/ModalScreenDate';

const ModalStack = createNativeStackNavigator();
const ModalNavigator = () => {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen
        name={'ModalScreenName'}
        component={ModalScreenName}
        options={{headerShown: false}}
      />
      <ModalStack.Screen
        name={'ModalScreenDescription'}
        component={ModalScreenDescription}
        options={{headerShown: false}}
      />
      <ModalStack.Screen
        name={'ModalScreenDate'}
        component={ModalScreenDate}
        options={{headerShown: false}}
      />
    </ModalStack.Navigator>
  );
};

export default ModalNavigator;
