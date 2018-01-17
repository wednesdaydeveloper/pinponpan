import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as Controller from './Controller/actions';

function* incrementAsync() {
  yield delay(1000);
  yield put(Controller.a());
}

export default function* rootSaga() {
  yield takeEvery(Controller.A_ASYNC, incrementAsync);
}