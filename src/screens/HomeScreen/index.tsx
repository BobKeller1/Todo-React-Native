import React, {FC, useEffect, useLayoutEffect, useMemo, useState} from 'react';
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
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {ITodoItem} from '../../store/reducers/rootReducer';
import {connect} from 'react-redux';

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

export interface RouteModalsProp {
  route: RouteProp<
    {params: {name: string; description: string; post: ITodoItem}},
    'params'
  >;
  todoArray: ITodoItem[];
}

const HomeScreen: FC<RouteModalsProp> = props => {
  console.log(props.todo);
  const data: ITodoItem[] = useMemo(
    () => [
      {
        title: 'todo title 1',
        description: 'description 0',
        status: true,
        date: '1652207435533',
        id: '11',
      },

      {
        title: 'todo title 5',
        description: 'description 0',
        status: false,
        date: '1672207435533',
        id: '14',
      },
      {
        title: 'todo title 6',
        description: 'description 0',
        status: true,
        date: '1652207435533',
        id: '15',
      },
    ],
    [],
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [todos, setTodos] = useState(data);
  const setComletedHandler = (todoId: string) => {
    const index = todos.findIndex(todo => todo.id === todoId);
    const todoList = [...todos];
    todoList[index].status = !todoList[index].status;
    setTodos(todoList);
  };

  const addTodo = (todo: ITodoItem) => {
    setTodos([...todos, todo]);
  };

  const navigation = useNavigation<NavigationProp<any>>();

  useLayoutEffect(() => {
    navigation.setOptions({title: 'Главный экран'});
  }, [navigation]);

  useEffect(() => {
    if (props.route.params?.post) {
      addTodo(props.route.params?.post);
    }
  }, [props.route.params?.post]);

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
          onPress={() => {
            navigation.navigate('Modal');
          }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  const {todo} = state;
  return {todo};
};

export default connect(mapStateToProps)(HomeScreen);
