import {TodoData} from '../../entities/TodoItem';

const prefix = 'TODO';

const ACTIONS = {
  ADD_TODO: `${prefix}/ADD_TODO`,
  TOGGLE_STATUS: `${prefix}/TOGGLE_STATUS`,
  HIDE_UNDO: `${prefix}/HIDE_UNDO`,
  UNDO: `${prefix}/UNDO`,
};

export const addTodo = (payload: TodoData) => ({
  type: ACTIONS.ADD_TODO,
  payload,
});

export const toggleStatus = (payload: any) => ({
  type: ACTIONS.TOGGLE_STATUS,
  payload,
});

export const hideUndo = () => ({type: ACTIONS.HIDE_UNDO});
export const undoTodo = () => ({type: ACTIONS.UNDO});

export default ACTIONS;
