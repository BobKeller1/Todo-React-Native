import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useKeyboardHeight from '../../../hooks/useKeyboardHeight';

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
    height: 40,
    paddingTop: 9,
    paddingRight: 16,
    paddingBottom: 9,
    paddingLeft: 16,
    borderRadius: 100,
    borderColor: 'green',
    borderWidth: 1,
  },
});

const ModalScreenDate = () => {
  const [date, setDate] = useState('');
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
        <Text style={styles.header}>Введите дату окончания задачи:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder={'Enter the end date of the task...'}
        />
      </View>
      <Animated.View
        style={[
          styles.buttonNext,
          {
            bottom: buttonAnim,
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{color: 'green'}}>Создать задачу</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ModalScreenDate;
