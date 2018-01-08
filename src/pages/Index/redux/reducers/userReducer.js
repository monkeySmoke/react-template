export const types = {
  GET_USER: 'INDEX/GET_USER',
  GET_USER_SUCCESS: 'INDEX/GET_USER_SUCCESS',
  GET_USER_FAILURE: 'INDEX/GET_USER_FAILURE',
};

const initialState = {
  userName: '',
  role: null,
};

export const actions = {
  getUserAction: () => ({
    type: types.GET_USER,
  }),
  getUserSuccessAction: obj => ({
    type: types.GET_USER_SUCCESS,
    data: obj,
  }),
  getUserFailureAction: () => ({
    type: types.GET_USER_FAILURE,
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

export const selectors = {
  getUserName: state => state.index.user.userName,
  getRole: state => state.index.user.role,
};
