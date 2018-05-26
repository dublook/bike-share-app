const initialState = {
  isLoading: true,
  email: null,
  password: null,
};

export default function (state: any = initialState, action: Function) {
  // TODO REH
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      email: action.email,
      password: action.password,
    };
  }
  if (action.type === 'LOGIN_IS_LOADING') {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  }
  if (action.type === 'LOGOUT_SUCCESS') {
    return {
      ...state,
      email: null,
      password: null,
    };
  }
  return state;
}
