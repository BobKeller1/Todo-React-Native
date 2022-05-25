import {delay} from 'redux-saga/effects';

export function* testSaga() {
  yield delay(2000);
  console.log('Hello world!');
}
