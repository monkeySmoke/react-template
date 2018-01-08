import { all, takeEvery } from 'redux-saga/effects';
import { types } from '../index';
import { getUserAsync } from './user';

export default function* saga() {
  yield all([
    takeEvery(types.GET_USER, getUserAsync),
  ]);
}
