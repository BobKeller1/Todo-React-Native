import React, {useLayoutEffect, useState} from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ModalButtons from '../../components/ModalButtons';
import useAnimatedButtonPosition from '../../hooks/useAnimatedButtonPosition';
import {useNavigation} from '@react-navigation/native';

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

const TodoNameScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation<any>();
  const isValid = name.length === 0;

  const buttonAnim = useAnimatedButtonPosition(false, 300, 60, 10);

  const navigateToDescription = () => {
    navigation.push('ScreenDescription', {
      name,
    });
  };

  console.log(buttonAnim);

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
      <Animated.View
        style={[
          styles.buttonNext,
          isValid && styles.buttonNextDisabled,
          {
            bottom: buttonAnim,
          },
        ]}>
        <ModalButtons
          isValid={isValid}
          navigateHandler={navigateToDescription}
          buttonAnim={buttonAnim}
          color={'primary'}
        />
      </Animated.View>
    </View>
  );
};

export default TodoNameScreen;
