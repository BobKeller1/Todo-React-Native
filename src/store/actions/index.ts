import {ITaskItem} from '../../screens/TodoDateScreen';

const prefix = 'TODO';

const ACTIONS = {
  ADD_TODO: `${prefix}/ADD_TODO`,
  TOGGLE_STATUS: `${prefix}/TOGGLE_STATUS`,
  SHOW_UNDO: `${prefix}/SHOW_UNDO`,
  HIDE_UNDO: `${prefix}/HIDE_UNDO`,
  UNDO: `${prefix}/UNDO`,
  UNDO_STATUS: `${prefix}/UNDO_STATUS`,
};

export const addTodo = (payload: ITaskItem) => ({
  type: ACTIONS.ADD_TODO,
  payload,
});

export const toggleStatus = (payload: any) => ({
  type: ACTIONS.TOGGLE_STATUS,
  payload,
});

export const showUndo = () => ({type: ACTIONS.SHOW_UNDO});
export const hideUndo = () => ({type: ACTIONS.HIDE_UNDO});
export const undoTodo = () => ({type: ACTIONS.UNDO});
export const undoStatus = (payload: string) => ({
  type: ACTIONS.UNDO_STATUS,
  payload,
});

export default ACTIONS;
