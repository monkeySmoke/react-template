import loginReducer, { actions as loginActions, selectors as loginSelectors, types as loginTypes } from './reducers/loginReducer';

export const actions = {
  ...loginActions,
};
export const types = {
  ...loginTypes,
};
export const selectors = {
  ...loginSelectors,
};
export default loginReducer;

