import {SET_COMPLETED} from '../actions/setCompleted';
import {ADD_TODO} from '../actions/addTodo';

export interface ITodoItem {
  title: string;
  description: string;
  date: string;
  id: string;
  status: boolean;
}

export interface IInitialStore {
  todo: ITodoItem[];
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
};

const rootReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case SET_COMPLETED:
      const index = state.todo.findIndex(
        todoItem => todoItem.id === action.payload,
      );
      const todoList = [...state.todo];
      todoList[index].status = !todoList[index].status;
      return {...state, todo: todoList};
    case ADD_TODO:
      return {...state, todo: [...state.todo, action.payload]};
    default:
      return state;
  }
};

export default rootReducer;
