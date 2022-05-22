import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import useKeyboardHeight from '../../../hooks/useKeyboardHeight';
import ModalButtons from '../../../components/ModalButtons';
import useAnimateButton from '../../../hooks/useAnimateButton';

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
});

const ModalScreenName = () => {
  const [name, setName] = useState('');
  const keyBoardHeight = useKeyboardHeight();
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const buttonUp = useAnimateButton(buttonAnim, false, 300, 360);
  const buttonDown = useAnimateButton(buttonAnim, false, 300, 60);

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
      <ModalButtons
        buttonName={'ButtonNextName'}
        name={name}
        buttonAnim={buttonAnim}
      />
    </View>
  );
};

export default ModalScreenName;
