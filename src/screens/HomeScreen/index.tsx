import React, {useLayoutEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import TodoList from './components/TodoList';
import SectionedTodoList from './components/SectionedTodoList';
import {ITodoItem} from '../../app/App';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  buttonAddTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 100,
    borderColor: '#268CC7',
    backgroundColor: '#268CC7',
    borderWidth: 1,
  },
  buttonAddTask: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 60,
    height: 60,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderColor: '#268CC7',
    backgroundColor: '#268CC7',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
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
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '12',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '13',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: true,
        date: '1652207435533',
        id: '14',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '15',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '16',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: true,
        date: '1652207435533',
        id: '17',
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
      <View style={styles.buttonAddTaskContainer}>
        <TouchableOpacity
          style={styles.buttonAddTask}
          onPress={() => navigation.navigate('Modal')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
