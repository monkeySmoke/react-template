import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import indexReducer from '../../pages/Index/redux';
import loginReducer from '../../pages/Login/redux';

export default combineReducers({
  routing: routerReducer,
  index: indexReducer,
  login: loginReducer,
});
