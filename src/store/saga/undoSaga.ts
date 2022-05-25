import {put, delay, takeLatest, race, take} from 'redux-saga/effects';
import {hideUndo, showUndo} from '../actions/undo';
import {SET_COMPLETED, setCompleted} from '../actions/setCompleted';

function* undoWorker(action) {
  const todoId = action.payload;
  console.log(todoId);
  yield put(showUndo());

  const {undo, archive} = yield race({
    undo: take(action => action.type === 'UNDO'),
    archive: delay(3000),
  });
  yield put(hideUndo());

  console.log(undo, archive);

  if (undo) {
    //TODO: другой экшн, чтобы не использовать снова SET_COMPLETED
    yield put(setCompleted(todoId));
  } else if (archive) {
    //  ничего не делать
  }
}

function* undoWatcher() {
  yield takeLatest(SET_COMPLETED, undoWorker);
}

export function* undoSaga() {
  yield undoWatcher();
}
