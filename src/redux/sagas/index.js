import { fork, all } from 'redux-saga/effects';
import loginSaga from '../../pages/Login/redux/sagas';
import indexSaga from '../../pages/Index/redux/sagas';

export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(indexSaga),
  ]);
}
