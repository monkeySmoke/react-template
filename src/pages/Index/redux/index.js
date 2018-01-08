import { combineReducers } from 'redux';
import userReducer, { actions as userActions, selectors as userSelectors, types as userTypes } from './reducers/userReducer';

export const actions = {
  ...userActions,
};
export const types = {
  ...userTypes,
};
export const selectors = {
  ...userSelectors,
};
export default combineReducers({
  user: userReducer,
});
