import {TodoData} from '../../entities/TodoItem';

const prefix = 'TODO';

const ACTIONS = {
  ADD_TODO: `${prefix}/ADD_TODO`,
  TOGGLE_STATUS: `${prefix}/TOGGLE_STATUS`,
};

export const addTodo = (payload: TodoData) => ({
  type: ACTIONS.ADD_TODO,
  payload,
});

export const toggleStatus = (payload: any) => ({
  type: ACTIONS.TOGGLE_STATUS,
  payload,
});

export default ACTIONS;
