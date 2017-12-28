export const types = {
  CURRENT_USER: 'USER/CURRENT_USER',
};
export const initialState = {
  userName: 'test',
  role: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};
export const actions = {};

export const getUserName = state => state.user.userName;
export const getUserRole = state => state.user.role;
export const getUser = state => ({
  userName: state.user.userName,
  role: state.user.role,
});
