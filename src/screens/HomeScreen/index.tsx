import React, {useLayoutEffect, useMemo, useState} from 'react';
import {Button, StyleSheet, TextInput, View, SafeAreaView} from 'react-native';
import TodoList from './components/TodoList';
import SectionedTodoList from './components/SectionedTodoList';
import {ITodoItem} from '../../app/App';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    maxWidth: 350,
    height: 36,
    padding: 7,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.93);',
  },
});

const HomeScreen = () => {
  const data: ITodoItem[] = useMemo(
    () => [
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '10',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '11',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: true,
        date: '1652207435533',
        id: '111',
      },
    ],
    [],
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [todos, setTodos] = useState(data);

  const setComletedHandler = (todoId: string) => {
    const index = data.findIndex(todo => todo.id === todoId);
    const todoList = [...todos];
    todoList[index].status = !todoList[index].status;
    setTodos(todoList);
  };

  const navigation = useNavigation<NavigationProp<any>>();

  useLayoutEffect(() => {
    navigation.setOptions({title: 'Главный экран'});
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Open modal'}
        onPress={() => navigation.navigate('Modal')}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
          placeholder={'Search'}
        />
      </View>
      {searchQuery ? (
        <TodoList
          data={todos}
          searchQuery={searchQuery}
          onPress={setComletedHandler}
        />
      ) : (
        <SectionedTodoList data={todos} onPress={setComletedHandler} />
      )}
    </SafeAreaView>
  );
};
export default HomeScreen;
