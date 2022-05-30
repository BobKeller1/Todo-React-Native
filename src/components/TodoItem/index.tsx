import React, {FC} from 'react';
import {dateFormatter} from '../../formatters/dateFormatters';
import List from '../List';
import {ITodoItem} from '../../entities/TodoItem';

interface TodoItemProps {
  item: ITodoItem;
  onPress: () => void;
}

const TodoItem: FC<TodoItemProps> = ({item, onPress}) => {
  const {status, description, title, date} = item;
  const formattedDate = dateFormatter(date);

  return (
    <List
      title={title}
      description={description}
      date={formattedDate}
      onPress={onPress}
      status={status}
    />
  );
};

export default TodoItem;
