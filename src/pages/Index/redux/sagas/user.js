import { put, call, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { actions } from '../index';
import { userInfo } from '../../services/api';

function* changePath() {
  yield put(push('/login'));
}

export function* getUserAsync() {
  const data = yield call(userInfo);
  if (data && data.status) {
    yield put(actions.getUserSuccessAction(data.data));
  } else {
    yield fork(changePath);
    yield put(actions.getUserFailureAction());
  }
}
