import React, {FC} from 'react';
import CustomIcon from '../CustomIcon';
import {TouchableOpacity} from 'react-native';

enum Colors {
  Primary = 'primary',
  Disabled = 'disabled',
  Green = 'green',
}

interface ButtonModalProp {
  isKeyboardAware?: boolean;
  isValid?: boolean;
  navigateHandler: () => void;
  color: Colors;
}

const ModalButtons: FC<ButtonModalProp> = ({
  isValid,
  navigateHandler,
  color,
}) => {
  const colors = {
    primary: '#268CC7',
    disabled: 'gray',
    green: 'green',
  };

  return (
    <TouchableOpacity disabled={isValid} onPress={navigateHandler}>
      <CustomIcon
        name={'arrow-right2'}
        size={18}
        color={!isValid ? colors[color] : colors.disabled}
      />
    </TouchableOpacity>
  );
};

export default ModalButtons;
