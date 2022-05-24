import React, {FC, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  Animated,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {RouteModalsProp} from '../HomeScreen';
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

const TodoDescriptionScreen: FC<RouteModalsProp> = ({route}) => {
  const {name} = route.params;
  const navigation = useNavigation<any>();
  const [description, setDescription] = useState('');

  const navigateToDate = () => {
    navigation.push('ScreenDate', {
      name,
      description,
    });
  };

  const buttonAnim = useAnimatedButtonPosition(false, 300, 60, 10);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#beb9b9',
      },
      headerLeft: () => (
        <Button onPress={() => navigation.pop()} title="Назад" />
      ),
      title: 'Добавить описание',
    });
  }, [navigation]);

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
      <Animated.View
        style={[
          styles.buttonNext,
          {
            bottom: buttonAnim,
          },
        ]}>
        <ModalButtons
          buttonAnim={buttonAnim}
          navigateHandler={navigateToDate}
          color={'primary'}
        />
      </Animated.View>
    </View>
  );
};

export default TodoDescriptionScreen;
