import React, {Dispatch, FC, useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, TextInput, View, SafeAreaView} from 'react-native';
import TodoList from './components/TodoList';
import SectionedTodoList from './components/SectionedTodoList';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {IInitialStore, ITodoItem} from '../../store/reducers/rootReducer';
import {connect} from 'react-redux';
import {setCompleted} from '../../store/actions/setCompleted';
import {addTodo} from '../../store/actions/addTodo';
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

  const toCreateTodo = () => navigation.navigate('ModalNavigator');
  const undo = () => console.log(undo);

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
        <TodoList data={todo} searchQuery={searchQuery} onPress={setStatus} />
      ) : (
        <SectionedTodoList data={todo} onPress={setStatus} />
      )}
      <CircleButtons
        right={20}
        borderColor={'#268CC7'}
        backgroundColor={'#268CC7'}
        icon={'plus'}
        onPress={toCreateTodo}
      />
      <CircleButtons
        right={310}
        borderColor={'black'}
        backgroundColor={'black'}
        icon={'undo2'}
        onPress={undo}
      />
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
