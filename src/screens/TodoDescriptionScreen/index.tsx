import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Animated,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import useKeyboardHeight from '../../hooks/useKeyboardHeight';
import {RouteModalsProp} from '../HomeScreen';
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

const TodoDescriptionScreen: FC<RouteModalsProp> = ({route}) => {
  const {name} = route.params;
  const navigation = useNavigation<NavigationProp<any>>();
  const [description, setDescription] = useState('');
  const keyBoardHeight = useKeyboardHeight();
  const indent = Number(keyBoardHeight) + 10;
  const initialHeight = 60;
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const navigateToDate = () => {
    navigation.push('ScreenDate', {
      name,
      description,
    });
  };

  const buttonUp = useAnimateButton(buttonAnim, false, 300, indent);
  const buttonDown = useAnimateButton(buttonAnim, false, 300, initialHeight);

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
      <ModalButtons
        buttonAnim={buttonAnim}
        navigateHandler={navigateToDate}
        color={'PRIMARY'}
      />
    </View>
  );
};

export default TodoDescriptionScreen;
