import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useKeyboardHeight from '../../../hooks/useKeyboardHeight';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomIcon from '../../../components/CustomIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    position: 'relative',
  },
  input: {
    height: 50,
    padding: 7,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.93);',
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
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

const ModalScreenName = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const keyBoardHeight = useKeyboardHeight();
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const buttonUp = useCallback(() => {
    Animated.timing(buttonAnim, {
      useNativeDriver: false,
      toValue: 356,
      duration: 300,
    }).start();
  }, [buttonAnim]);

  const buttonDown = useCallback(() => {
    Animated.timing(buttonAnim, {
      useNativeDriver: false,
      toValue: 60,
      duration: 300,
    }).start();
  }, [buttonAnim]);

  useEffect(() => {
    if (Number(keyBoardHeight) !== 0) {
      buttonUp();
    } else {
      buttonDown();
    }
  }, [buttonDown, buttonUp, keyBoardHeight]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Введите название задачи:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder={'Enter the task name...'}
        />
      </View>
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
            color={name ? '#268CC7' : 'gray'}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ModalScreenName;
