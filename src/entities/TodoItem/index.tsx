import React, {FC} from 'react';
import {dateFormatter} from '../../formatters/dateFormatters';
import List from '../../components/List';

interface TodoItemProps {
  item: ITodo;
  onPress: () => void;
}

export interface ITodo {
  title: string;
  description: string;
  date: string;
  status: boolean;
  id: string;
}

export type Todo = Omit<ITodo, 'id'>;

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
