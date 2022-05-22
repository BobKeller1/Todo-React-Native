import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, Animated, TextInput, StyleSheet} from 'react-native';
import useKeyboardHeight from '../../../hooks/useKeyboardHeight';
import {RouteModalsProp} from '../../HomeScreen';
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

const ModalScreenDescription: FC<RouteModalsProp> = ({route}) => {
  const {name} = route.params;
  const [description, setDescription] = useState('');
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
        <Text style={styles.header}>Введите описание задачи:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder={'Enter the task description...'}
        />
      </View>
      <ModalButtons
        buttonName={'ButtonNextDescription'}
        buttonAnim={buttonAnim}
        name={name}
        description={description}
      />
    </View>
  );
};

export default ModalScreenDescription;
