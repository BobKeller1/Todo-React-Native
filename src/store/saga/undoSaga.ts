import {put, delay, takeLatest, race, take} from 'redux-saga/effects';
import ACTIONS, {hideUndo, showUndo, undoStatus} from '../actions';

function* undoWorker(action) {
  const todoId = action.payload;
  yield put(showUndo());

  const {undo} = yield race({
    undo: take(action => action.type === ACTIONS.UNDO),
    timeout: delay(3000),
  });
  yield put(hideUndo());

  if (undo) {
    yield put(undoStatus(todoId));
  }
}

function* undoWatcher() {
  yield takeLatest(ACTIONS.TOGGLE_STATUS, undoWorker);
}

export function* undoSaga() {
  yield undoWatcher();
}
