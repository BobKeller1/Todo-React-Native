import {put, delay, takeLatest, race, take, cancel} from 'redux-saga/effects';
import ACTIONS, {hideUndo, toggleStatus} from '../actions';

function* undoWorker({payload: {isCanselable, id}}) {
  if (!isCanselable) {
    yield cancel();
  }
  const {undo} = yield race({
    undo: take(ACTIONS.UNDO),
    timeout: delay(3000),
  });
  if (undo) {
    yield put(toggleStatus({id, isCanselable: false}));
  } else {
    yield put(hideUndo());
  }
}

function* undoWatcher() {
  yield takeLatest(ACTIONS.TOGGLE_STATUS, undoWorker);
}

export function* undoSaga() {
  yield undoWatcher();
}
