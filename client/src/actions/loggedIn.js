/*
const loggedIn = {
  type: "LOGGED_IN",
  loggedIn: false
};


export function loggedIn() {
    return {
      type: "LOGGED_IN",
      loggedIn: false
    }
};
*/


export const login_success = () => {
  return {
    type: "LOGIN_SUCCESS"
  }
}

export const login_failure = () => {
  return {
    type: "LOGIN_FAILURE"
  }
}
