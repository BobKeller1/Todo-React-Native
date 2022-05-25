import {ITaskItem} from '../../screens/TodoDateScreen';

const prefix = 'TODO';

const ACTIONS = {
  ADD_TODO: `${prefix}/ADD_TODO`,
  TOGGLE_STATUS: `${prefix}/TOGGLE_STATUS`,
};

export const addTodo = (payload: ITaskItem) => ({
  type: ACTIONS.ADD_TODO,
  payload,
});

export const toggleStatus = (payload: any) => ({
  type: ACTIONS.TOGGLE_STATUS,
  payload,
});

export default ACTIONS;
