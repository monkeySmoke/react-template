import { takeLatest, all } from 'redux-saga/effects';
import { types } from '../index';
import { loginAsync } from './login';

export default function* saga() {
  yield all([
    takeLatest(types.LOGIN, loginAsync),
  ]);
}
