import {testSaga} from './testSaga';
import {all, call, delay} from 'redux-saga/effects';

export default function* rootSaga() {
  yield delay(2000);
  yield all([call(testSaga)]);
}
