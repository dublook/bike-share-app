// @flow
export function login(email: string, password: string) {
  return {
    type: 'LOGIN_SUCCESS',
    email,
    password,
  };
}

export function logout() {
  return {
    type: 'LOGOUT_SUCCESS',
  };
}
