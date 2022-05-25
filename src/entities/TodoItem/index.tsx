import React, {FC} from 'react';
import {dateFormatter} from '../../formatters/dateFormatters';
import List from '../../components/List';

interface TodoItemProps {
  item: ITodoItem;
  onPress: () => void;
}

export interface ITodoItem {
  title: string;
  description: string;
  date: string;
  id: string;
  status: boolean;
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
