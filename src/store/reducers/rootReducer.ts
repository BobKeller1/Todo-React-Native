import {ITodoItem} from '../../entities/TodoItem';
import ACTIONS from '../actions';
import {generateId} from '../../utils/generateId';

export interface IInitialStore {
  todo: ITodoItem[];
  undo: {
    isShow: boolean;
  };
}

interface IActions {
  type: string;
  payload: any;
}

const initialState: IInitialStore = {
  todo: [
    {
      title: 'todo title TEST 1 TEST',
      description: 'description 0',
      status: true,
      date: '1652207435533',
      id: '11',
    },

    {
      title: 'todo title 5',
      description: 'description 0',
      status: false,
      date: '1672207435533',
      id: '14',
    },
    {
      title: 'todo title 6',
      description: 'description 0',
      status: true,
      date: '1652207435533',
      id: '15',
    },
  ],
  undo: {
    isShow: false,
  },
};

const rootReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_STATUS:
      console.log(action.payload);
      const index = state.todo.findIndex(
        todoItem => todoItem.id === action.payload.id,
      );
      const todoList = [...state.todo];
      todoList[index].status = !todoList[index].status;
      return {
        ...state,
        todo: todoList,
        undo: {isShow: action.payload.isCanselable},
      };
    case ACTIONS.ADD_TODO:
      const {id} = generateId();
      const newTodo = {...action.payload, id};
      return {...state, todo: [...state.todo, newTodo]};
    case ACTIONS.HIDE_UNDO:
      return {...state, undo: {isShow: false}};
    default:
      return state;
  }
};

export default rootReducer;
