import React, {FC} from 'react';
import CustomIcon from '../CustomIcon';
import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ITodoItem} from '../../app/App';
import Value = Animated.Value;

const styles = StyleSheet.create({
  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    right: 30,
    width: 70,
    height: 40,
    paddingTop: 9,
    paddingRight: 16,
    paddingBottom: 9,
    paddingLeft: 16,
    borderRadius: 100,
    borderColor: '#268CC7',
    borderWidth: 1,
  },
  buttonNextDisabled: {
    borderColor: 'gray',
  },
});

interface ButtonModalProp {
  buttonName: string;
  name?: string;
  description?: string;
  todo?: ITodoItem;
  buttonAnim?: Value;
}

const ModalButtons: FC<ButtonModalProp> = ({
  buttonName,
  name,
  description,
  todo,
  buttonAnim,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const colors = {
    primary: '#268CC7',
    disabled: 'gray',
    createTodo: 'green',
  };
  switch (buttonName) {
    case 'ButtonNextName':
      return (
        <Animated.View
          style={[
            styles.buttonNext,
            !name && styles.buttonNextDisabled,
            {
              bottom: buttonAnim,
            },
          ]}>
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
              color={name ? colors.primary : colors.disabled}
            />
          </TouchableOpacity>
        </Animated.View>
      );
    case 'ButtonNextDescription':
      return (
        <Animated.View
          style={[
            styles.buttonNext,
            {
              bottom: buttonAnim,
            },
          ]}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('ModalScreenDate', {
                name,
                description,
              })
            }>
            <CustomIcon
              name={'arrow-right2'}
              size={18}
              color={colors.primary}
            />
          </TouchableOpacity>
        </Animated.View>
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
          <Text style={{color: colors.createTodo}}>Создать задачу</Text>
        </TouchableOpacity>
      );
    default:
      return null;
  }
};

export default ModalButtons;
