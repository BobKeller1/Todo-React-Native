import {testSaga} from './testSaga';
import {all, call} from 'redux-saga/effects';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default function* rootSaga() {
  yield call(delay, 2000);
  yield all([call(testSaga)]);
}
