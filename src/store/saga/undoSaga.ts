import {put, delay, takeLatest} from 'redux-saga/effects';
import {hideUndo, showUndo} from '../actions/undo';
import {SET_COMPLETED} from '../actions/setCompleted';

function* undoWorker() {
  yield put(showUndo());
  yield delay(3000);
  yield put(hideUndo());
}

function* undoWatcher() {
  yield takeLatest(SET_COMPLETED, undoWorker);
}

export function* undoSaga() {
  yield undoWatcher();
}
