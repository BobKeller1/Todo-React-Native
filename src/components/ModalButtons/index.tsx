import React, {FC} from 'react';
import CustomIcon from '../CustomIcon';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Value = Animated.Value;

const styles = StyleSheet.create({
  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 650,
    right: 40,
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
    borderColor: 'green',
  },
  buttonNextDisabled: {
    borderColor: 'gray',
  },
});

enum Colors {
  Primary = 'PRIMARY',
  Disabled = 'DISABLED',
  Green = 'GREEN',
}

interface ButtonModalProp {
  isKeyboardAware?: boolean;
  isValid?: boolean;
  navigateHandler: () => void;
  buttonAnim?: Value;
  color: Colors;
}

const ModalButtons: FC<ButtonModalProp> = ({
  isValid,
  buttonAnim,
  navigateHandler,
  color,
}) => {
  const colors = {
    PRIMARY: '#268CC7',
    DISABLED: 'gray',
    GREEN: 'green',
  };
  return (
    <Animated.View
      style={[
        styles.buttonNext,
        isValid ? styles.buttonNextDisabled : {borderColor: colors[color]},
        {
          bottom: buttonAnim,
        },
      ]}>
      <TouchableOpacity disabled={isValid} onPress={navigateHandler}>
        <CustomIcon
          name={'arrow-right2'}
          size={18}
          color={!isValid ? colors[color] : colors.DISABLED}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ModalButtons;
