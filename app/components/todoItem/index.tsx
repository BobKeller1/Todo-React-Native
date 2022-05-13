import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ITodoItemProps {
  title: string;
  description: string;
  status: boolean;
  date: string;
}

const styles = StyleSheet.create({
  todoItem: {
    maxWidth: 370,
    height: 84,
    padding: 10,
  },
  todoItemCompleted: {
    color: 'rgba(0,0,0,0.15)',
  },
  container: {
    padding: 13,
    flexDirection: 'row',
  },
  mainContainer: {
    flex: 0.7,
  },
  sideContainer: {
    flex: 0.3,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.54)',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: 'rgba(0,0,0,0.24)',
  },
  status: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.54)',
  },
  statusCompleted: {
    color: 'green',
  },
  date: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.54)',
  },
});

const TodoItem: FC<ITodoItemProps> = ({title, description, status, date}) => {
  const [isCompleted, setIsCompleted] = useState(status);

  const todoStatus = isCompleted ? (
    <Text style={styles.status && styles.statusCompleted}>Выполнено</Text>
  ) : (
    <Text style={styles.status}>Не выполнено</Text>
  );

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsCompleted(!isCompleted)}
        activeOpacity={0.75}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <Text
              style={
                isCompleted
                  ? [styles.textCompleted, styles.title]
                  : styles.title
              }>
              {title}
            </Text>
            <Text
              style={
                isCompleted
                  ? [styles.description, styles.textCompleted]
                  : styles.description
              }>
              {description}
            </Text>
          </View>
          <View style={styles.sideContainer}>
            <Text style={styles.status}>{todoStatus}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
