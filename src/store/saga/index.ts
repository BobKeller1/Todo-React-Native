import {testSaga} from './testSaga';
import {all, call} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([call(testSaga)]);
}
