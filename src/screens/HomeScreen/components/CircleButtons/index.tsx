import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomIcon from '../../../../components/CustomIcon';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    borderRadius: 100,
    borderColor: '#268CC7',
    backgroundColor: '#268CC7',
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 60,
    height: 60,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderColor: '#268CC7',
    backgroundColor: '#268CC7',
    borderWidth: 1,
  },
  iconContainer: {
    color: 'white',
    paddingTop: 8,
  },
});

interface ICircleButtonsProp {
  right: number;
  borderColor: string;
  backgroundColor: string;
  icon: string;
  onPress: () => void;
}

const Circlebuttons: FC<ICircleButtonsProp> = ({
  right,
  borderColor,
  backgroundColor,
  icon,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        {
          right: right,
        },
        {
          backgroundColor: backgroundColor,
        },
        {
          borderColor: borderColor,
        },
      ]}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor,
          },
          {
            borderColor: borderColor,
          },
        ]}
        onPress={onPress}>
        <Text style={styles.iconContainer}>
          <CustomIcon name={icon} size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Circlebuttons;
