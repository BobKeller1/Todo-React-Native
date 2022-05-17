import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    height: 84,
    padding: 10,
  },
  todoItemCompleted: {
    color: 'rgba(0,0,0,0.15)',
  },
  container: {
    padding: 13,
    paddingLeft: 25,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  mainContainer: {
    flexGrow: 1,
    marginBottom: 10,
  },
  sideContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: 'rgba(0,0,0,0.54)',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: 'rgba(0,0,0,0.24)',
  },
  status: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0,0,0,0.54)',
  },
  statusCompleted: {
    color: 'green',
  },
  date: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0,0,0,0.54)',
  },
});

interface ListProps {
  title: string;
  description: string;
  status: boolean;
  date: string;
  onPress: () => void;
}

const List: FC<ListProps> = ({title, description, status, date, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <Text style={[status && styles.textCompleted, styles.title]}>
              {title}
            </Text>
            <Text style={[styles.description, status && styles.textCompleted]}>
              {description}
            </Text>
          </View>
          <View style={styles.sideContainer}>
            <Text style={[styles.status, status && styles.statusCompleted]}>
              {status ? 'Выполнено' : 'Не выполнено'}
            </Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default List;
