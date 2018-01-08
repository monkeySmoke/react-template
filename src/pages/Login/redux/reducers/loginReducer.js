export const types = {
  LOGIN: 'LOGIN/LOGIN',
  LOGIN_SUCCESS: 'LOGIN/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN/LOGIN_FAILURE',
};

const initialState = {
  token: '',
};

export const actions = {
  loginAction: user => ({
    type: types.LOGIN,
    data: user,
  }),
  loginSuccessAction: token => ({
    type: types.LOGIN_SUCCESS,
    data: token,
  }),
  loginFailureAction: () => ({
    type: types.LOGIN_FAILURE,
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { token: action.data });
    default:
      return state;
  }
};
export const selectors = {
  getToken: state => state.login.token,
};

