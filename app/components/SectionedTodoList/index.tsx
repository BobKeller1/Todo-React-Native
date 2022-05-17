import React, {FC, useMemo} from 'react';
import {
  ListRenderItem,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {dateFormatter} from '../../../formatters/dateFormatters';
import {ITodoItem} from '../../App';
import TodoItem from '../TodoItem';
import {groupBy} from '../../../utils/arrayUtils';

const styles = StyleSheet.create({
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
  onPress: () => void;
}

const SectionedTodoList: FC<SectionedTodoListProps> = ({data, onPress}) => {
  const renderItem: ListRenderItem<ITodoItem> = ({item}) => {
    return <TodoItem item={item} onPress={onPress} />;
  };

  const groupedByDate = groupBy(data, item => item.date);

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
    <View style={{flex: 1}}>
      <SectionList
        sections={groupedTodo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>
            {dateFormatter(title, true, ',', 0)}
          </Text>
        )}
      />
    </View>
  );
};

export default SectionedTodoList;
