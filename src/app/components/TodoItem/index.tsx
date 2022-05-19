import React, {FC} from 'react';
import {ITodoItem} from '../../App';
import List from '../UI/List';
import {dateFormatter} from '../../../formatters/dateFormatters';

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
