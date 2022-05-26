import React, {FC} from 'react';
import CustomIcon from '../CustomIcon';
import {StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonNextDisabled: {
    borderColor: 'gray',
  },
});

export enum Colors {
  Primary = 'primary',
  Disabled = 'disabled',
  Green = 'green',
}

interface ButtonModalProp {
  isValid?: boolean;
  onPress: () => void;
  color: Colors;
}

const OutlineButton: FC<ButtonModalProp> = ({isValid, onPress, color}) => {
  const colors = {
    [Colors.Primary]: '#268CC7',
    [Colors.Disabled]: 'gray',
    [Colors.Green]: 'green',
  };

  return (
    <TouchableOpacity
      disabled={isValid}
      onPress={onPress}
      style={
        isValid
          ? [styles.buttonNext, {borderColor: colors.disabled}]
          : [styles.buttonNext, {borderColor: colors[color]}]
      }>
      <CustomIcon
        name={'arrow-right2'}
        size={18}
        color={!isValid ? colors[color] : colors.disabled}
      />
    </TouchableOpacity>
  );
};

export default OutlineButton;
