import {testSaga} from './testSaga';
import {all, call} from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('саги запущены');
  yield all([call(testSaga)]);
}
