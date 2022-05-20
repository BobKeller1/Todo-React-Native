import React, {FC, useCallback, useMemo} from 'react';
import {ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {dateFormatter} from '../../../../formatters/dateFormatters';
import {ITodoItem} from '../../../../app/App';
import TodoItem from '../../../../app/components/TodoItem';
import {groupBy} from '../../../../utils/arrayUtils';
import {KeyboardAwareSectionList} from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgb(154,186,232)',
  },
});

interface SectionedTodoListProps {
  data: ITodoItem[];
  onPress: (todoId: string) => void;
}

const SectionedTodoList: FC<SectionedTodoListProps> = ({data, onPress}) => {
  const renderItem: ListRenderItem<ITodoItem> = ({item}) => {
    return <TodoItem item={item} onPress={() => onPress(item.id)} />;
  };

  const sectionHeader = useCallback(({section: {title}}) => {
    return <Text style={styles.sectionHeader}>{title}</Text>;
  }, []);

  const groupedByDate = useMemo(
    () => groupBy(data, item => dateFormatter(item.date, true, ',', 0)),
    [data],
  );

  const groupedTodo = useMemo(
    () =>
      Object.keys(groupedByDate).map(key => {
        return {
          title: key,
          data: groupedByDate[key],
        };
      }),
    [groupedByDate],
  );

  return (
    <View style={styles.container}>
      <KeyboardAwareSectionList
        sections={groupedTodo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderSectionHeader={sectionHeader}
        extraData={onPress}
      />
    </View>
  );
};

export default SectionedTodoList;
