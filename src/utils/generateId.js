import {v4 as uuidv4} from 'uuid';

export const generateId = item => {
  return {...item, id: uuidv4()};
};
