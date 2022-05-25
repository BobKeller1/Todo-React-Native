import React, {useLayoutEffect, useState} from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import OutlineButton from '../../components/OutlineButton';
import useAnimateKeyboardHeight from '../../hooks/useAnimateKeyboardHeight';
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
  buttonContainer: {
    position: 'absolute',
    right: 120,
  },
});

const TodoNameScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation<any>();
  const isValid = name.length === 0;

  const buttonAnim = useAnimateKeyboardHeight(false, 300, 100, 50);

  const navigateToDescription = () => {
    navigation.push('ScreenDescription', {
      name,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#beb9b9',
      },
      headerLeft: () => <Button onPress={navigation.goBack} title="Закрыть" />,
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
          styles.buttonContainer,
          {
            bottom: buttonAnim,
          },
        ]}>
        <OutlineButton
          isValid={isValid}
          onPress={navigateToDescription}
          buttonAnim={buttonAnim}
          color={'primary'}
        />
      </Animated.View>
    </View>
  );
};

export default TodoNameScreen;
