import React, {Dispatch, FC, useLayoutEffect, useState} from 'react';
import {StyleSheet, TextInput, View, SafeAreaView} from 'react-native';
import TodoList from './components/TodoList';
import SectionedTodoList from './components/SectionedTodoList';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {connect} from 'react-redux';
import {IInitialStore} from '../../store/reducers/rootReducer';
import {ITodoItem, TodoData} from '../../entities/TodoItem';
import {toggleStatus, undoTodo} from '../../store/actions';
import CircleButtons from './components/CircleButtons';

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
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 100,
    borderColor: '#268CC7',
    backgroundColor: '#268CC7',
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonAddTask: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: '#268CC7',
    backgroundColor: '#268CC7',
  },
});

export interface IHomeScreenProp {
  route: RouteProp<
    {params: {name: string; description: string; post: TodoData}},
    'params'
  >;
  todo: ITodoItem[];
  toggleCompleted: (payload: string) => void;
  undo: {
    isShow: boolean;
  };
  addTask: (todo: ITodoItem) => void;
  undoTask: () => void;
}

const HomeScreen: FC<IHomeScreenProp> = ({
  todo,
  toggleCompleted,
  undo,
  undoTask,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();
  const {isShow} = undo;
  const onPressUndo = () => undoTask();
  const toCreateTodo = () =>
    navigation.navigate('ModalNavigator', {screen: 'TodoNameScreen'});

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
          data={todo}
          searchQuery={searchQuery}
          onPress={toggleCompleted}
        />
      ) : (
        <SectionedTodoList data={todo} onPress={toggleCompleted} />
      )}
      <CircleButtons
        right={20}
        borderColor={'#268CC7'}
        backgroundColor={'#268CC7'}
        icon={'plus'}
        onPress={toCreateTodo}
      />
      {isShow && (
        <CircleButtons
          right={310}
          borderColor={'black'}
          backgroundColor={'black'}
          icon={'undo2'}
          onPress={onPressUndo}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: IInitialStore) => {
  const {todo, undo} = state;
  return {todo, undo};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    toggleCompleted: (id: string) => {
      dispatch(toggleStatus({id: id, isCanselable: true}));
    },
    undoTask: () => {
      dispatch(undoTodo());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
