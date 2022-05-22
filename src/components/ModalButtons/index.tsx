import React from 'react';
import CustomIcon from '../CustomIcon';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ITodoItem} from '../../app/App';

const ModalButtons = (
  buttonName: string,
  name?: string,
  description?: string,
  todo?: ITodoItem,
) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const component = () => {
    switch (buttonName) {
      case 'ButtonNextName':
        return (
          <TouchableOpacity
            disabled={!name}
            onPress={() =>
              navigation.push('ModalScreenDescription', {
                name,
              })
            }>
            <CustomIcon
              name={'arrow-right2'}
              size={18}
              color={name ? '#268CC7' : 'gray'}
            />
          </TouchableOpacity>
        );
      case 'ButtonNextDescription':
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.push('ModalScreenDate', {
                name,
                description,
              })
            }>
            <CustomIcon name={'arrow-right2'} size={18} color={'#268CC7'} />
          </TouchableOpacity>
        );
      case 'CreateTodo':
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({
                name: 'HomeScreen',
                params: {post: todo},
                merge: true,
              })
            }>
            <Text style={{color: 'green'}}>Создать задачу</Text>
          </TouchableOpacity>
        );
    }
  };

  return <>{component}</>;
};

export default ModalButtons;
