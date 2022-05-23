export interface ITodoItem {
  title: string;
  description: string;
  date: string;
  id: string;
  status: boolean;
}

interface IInitialStore {
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
    default:
      return state;
  }
};

export default rootReducer;
