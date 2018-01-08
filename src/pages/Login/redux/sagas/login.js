import { put, call, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { login } from '../../services/api';
import { actions } from '../index';

function* changePath() {
  yield put(push('/'));
}

export function* loginAsync(action) {
  try {
    yield call(delay, 0);
    const data = yield call(login, action.data);
    if (data && data.status) {
      yield fork(changePath);
      yield put(actions.loginSuccessAction(data.data));
    } else {
      yield put(actions.loginFailureAction());
    }
  } catch (e) {
    yield put(actions.loginFailureAction());
  }
}

