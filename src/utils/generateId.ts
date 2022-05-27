import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export const generateId = (): {id: string} => {
  const id = uuidv4();
  return {id};
};
