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
import OutlineButton, {Colors} from '../../components/OutlineButton';
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
    right: 30,
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

  const buttonAnim = useAnimateKeyboardHeight(false, 300, 70, 50);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#beb9b9',
      },
      headerLeft: () => <Button onPress={navigation.goBack} title="Назад" />,
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
          styles.buttonContainer,
          {
            bottom: buttonAnim,
          },
        ]}>
        <OutlineButton onPress={navigateToDate} color={Colors.Primary} />
      </Animated.View>
    </View>
  );
};

export default TodoDescriptionScreen;
