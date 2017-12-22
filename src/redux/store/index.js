import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createHashHistory({
  basename: '',
  hashType: 'slash',
});
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
