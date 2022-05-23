import React, {FC} from 'react';
import CustomIcon from '../CustomIcon';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  buttonCreateTodo: {
    width: 150,
    borderColor: 'green',
  },
  buttonNextDisabled: {
    borderColor: 'gray',
  },
});

interface ButtonModalProp {
  buttonName: string;
  isValid?: boolean;
  navigateToDescription?: () => void;
  navigateToDate?: () => void;
  navigateToHome?: () => void;
  buttonAnim?: Value;
}

const ModalButtons: FC<ButtonModalProp> = ({
  buttonName,
  isValid,
  navigateToDescription,
  navigateToDate,
  navigateToHome,
  buttonAnim,
}) => {
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
            isValid && styles.buttonNextDisabled,
            {
              bottom: buttonAnim,
            },
          ]}>
          <TouchableOpacity disabled={isValid} onPress={navigateToDescription}>
            <CustomIcon
              name={'arrow-right2'}
              size={18}
              color={!isValid ? colors.primary : colors.disabled}
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
          <TouchableOpacity onPress={navigateToDate}>
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
        <View style={[styles.buttonNext, styles.buttonCreateTodo]}>
          <TouchableOpacity onPress={navigateToHome}>
            <Text style={{color: colors.createTodo}}>Создать задачу</Text>
          </TouchableOpacity>
        </View>
      );
    default:
      return null;
  }
};

export default ModalButtons;
