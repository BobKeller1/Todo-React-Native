import {undoSaga} from './undoSaga';
import {all, call} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([call(undoSaga)]);
}
