import {ITodoItem} from '../reducers/rootReducer';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (payload: ITodoItem) => ({type: ADD_TODO, payload});
