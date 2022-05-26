export interface ITodoItem {
  title: string;
  description: string;
  date: string;
  status: boolean;
  id: string;
}

export type TodoData = Omit<ITodoItem, 'id'>;
