export const SHOW_UNDO = 'SHOW_UNDO';
export const HIDE_UNDO = 'HIDE_UNDO';
export const UNDO = 'UNDO';

export const showUndo = () => ({type: SHOW_UNDO});
export const hideUndo = () => ({type: HIDE_UNDO});
export const undoTodo = () => ({type: UNDO});
