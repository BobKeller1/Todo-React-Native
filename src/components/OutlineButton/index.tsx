import React, {FC} from 'react';
import CustomIcon from '../CustomIcon';
import {StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonNextDisabled: {
    borderColor: 'gray',
  },
});

enum Colors {
  Primary = 'primary',
  Disabled = 'disabled',
  Green = 'green',
}

interface ButtonModalProp {
  isKeyboardAware?: boolean;
  isValid?: boolean;
  onPress: () => void;
  color: Colors;
}

const OutlineButton: FC<ButtonModalProp> = ({isValid, onPress, color}) => {
  const colors = {
    primary: '#268CC7',
    disabled: 'gray',
    green: 'green',
  };

  return (
    <TouchableOpacity
      disabled={isValid}
      onPress={onPress}
      style={[
        styles.buttonNext,
        isValid && styles.buttonNextDisabled,
        !isValid && {borderColor: colors[color]},
      ]}>
      <CustomIcon
        name={'arrow-right2'}
        size={18}
        color={!isValid ? colors[color] : colors.disabled}
      />
    </TouchableOpacity>
  );
};

export default OutlineButton;
