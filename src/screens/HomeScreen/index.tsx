import React, {Dispatch, FC, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import TodoList from './components/TodoList';
import SectionedTodoList from './components/SectionedTodoList';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import CustomIcon from '../../components/CustomIcon';
import {connect} from 'react-redux';
import {ITodoItem} from '../../entities/TodoItem';
import {IInitialStore} from '../../store/reducers/rootReducer';
import {toggleStatus} from '../../store/actions';

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
    {params: {name: string; description: string; post: ITodoItem}},
    'params'
  >;
  todo: ITodoItem[];
  toggleCompleted: (id: string) => void;
  addTask: (todo: ITodoItem) => void;
}

const HomeScreen: FC<IHomeScreenProp> = ({todo, toggleCompleted}) => {
  const [searchQuery, setSearchQuery] = useState('');
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
          data={todo}
          searchQuery={searchQuery}
          onPress={toggleCompleted}
        />
      ) : (
        <SectionedTodoList data={todo} onPress={toggleCompleted} />
      )}
      <View style={styles.buttonAddTaskContainer}>
        <TouchableOpacity
          style={styles.buttonAddTask}
          onPress={() => {
            navigation.navigate('ModalNavigator');
          }}>
          <View>
            <CustomIcon name={'plus'} size={20} color={'white'} />
          </View>
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
    toggleCompleted: (id: string) => {
      dispatch(toggleStatus(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
