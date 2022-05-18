import React, {FC, useCallback, useMemo} from 'react';
import {ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {ITodoItem} from '../../App';
import TodoItem from '../TodoItem';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyElementContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#000',
  },
});

interface TodoListProps {
  data: ITodoItem[];
  searchQuery: string;
  onPress: () => void;
}

const TodoList: FC<TodoListProps> = ({data, searchQuery, onPress}) => {
  const todosFiltredList = useMemo(
    () =>
      data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [data, searchQuery],
  );

  const FlatListEmptyElement = useCallback(() => {
    return (
      <View style={styles.emptyElementContainer}>
        <Text>Извините, ничего не найдено!</Text>
      </View>
    );
  }, []);

  const renderItem: ListRenderItem<ITodoItem> = ({item}) => {
    return <TodoItem item={item} onPress={onPress} />;
  };

  const FlatListItemSeparator = useCallback(() => {
    return <View style={styles.listSeparator} />;
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareFlatList
        data={todosFiltredList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{flexGrow: 1}}
        ItemSeparatorComponent={FlatListItemSeparator}
        ListFooterComponent={
          todosFiltredList.length !== 0 ? FlatListItemSeparator : null
        }
        ListHeaderComponent={
          todosFiltredList.length !== 0 ? FlatListItemSeparator : null
        }
        ListEmptyComponent={FlatListEmptyElement}
      />
    </View>
  );
};

export default TodoList;
