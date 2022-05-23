import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useKeyboardHeight from '../../hooks/useKeyboardHeight';
import ModalButtons from '../../components/ModalButtons';
import useAnimateButton from '../../hooks/useAnimateButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';

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

const TodoNameScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();
  const isValid = name.length === 0;
  const keyBoardHeight = useKeyboardHeight();
  const indent = Number(keyBoardHeight) + 10;
  const initialHeight = 60;
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const buttonUp = useAnimateButton(buttonAnim, false, 300, indent);
  const buttonDown = useAnimateButton(buttonAnim, false, 300, initialHeight);

  const navigateToDescription = () => {
    navigation.push('ScreenDescription', {
      name,
    });
  };

  useEffect(() => {
    if (Number(keyBoardHeight) !== 0) {
      buttonUp();
    } else {
      buttonDown();
    }
  }, [buttonDown, buttonUp, keyBoardHeight]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#beb9b9',
      },
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Закрыть" />
      ),
      title: 'Добавить задачу',
    });
  }, [navigation]);

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
        isValid={isValid}
        navigateHandler={navigateToDescription}
        buttonAnim={buttonAnim}
        color={'PRIMARY'}
      />
    </View>
  );
};

export default TodoNameScreen;
