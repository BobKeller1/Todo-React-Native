import React, {Dispatch, FC, useEffect, useLayoutEffect, useState} from 'react';
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
import CustomIcon from '../../components/CustomIcon';
import {IInitialStore, ITodoItem} from '../../store/reducers/rootReducer';
import {connect} from 'react-redux';
import {setCompleted} from '../../store/actions/setCompleted';
import {addTodo} from '../../store/actions/addTodo';

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
  buttonContainer: {
    color: 'white',
    paddingTop: 8,
  },
});

export interface RouteModalsProp {
  route: RouteProp<
    {params: {name: string; description: string; post: ITodoItem}},
    'params'
  >;
  todo: ITodoItem[];
  setStatus: (id: string) => void;
  addTask: (todo: ITodoItem) => void;
}

const HomeScreen: FC<RouteModalsProp> = ({route, todo, setStatus, addTask}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();

  useLayoutEffect(() => {
    navigation.setOptions({title: 'Главный экран'});
  }, [navigation]);

  useEffect(() => {
    if (route.params?.post) {
      addTask(route.params?.post);
    }
  }, [route.params?.post]);

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
          data={todo}
          searchQuery={searchQuery}
          onPress={setCompleted}
        />
      ) : (
        <SectionedTodoList data={todo} onPress={setStatus} />
      )}
      <View style={styles.buttonAddTaskContainer}>
        <TouchableOpacity
          style={styles.buttonAddTask}
          onPress={() => {
            navigation.navigate('ModalNavigator');
          }}>
          <Text style={styles.buttonContainer}>
            <CustomIcon name={'plus'} size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: IInitialStore) => {
  const {todo} = state;
  return {todo};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setStatus: (id: string) => {
      dispatch(setCompleted(id));
    },
    addTask: (todo: ITodoItem) => {
      dispatch(addTodo(todo));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
