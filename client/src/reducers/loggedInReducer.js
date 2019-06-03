/*
export default function reducer(state = {
  loggedIn: false
}, action) {
  switch(action.type) {
    case "LOGGED_IN": {
      return {
        ...state,
        loggedIn: true
      }
    }
    case "LOGGED_OUT": {
      return {
        ...state,
        loggedIn: false
      }
    }
    default: return state;
  }

}
*/

const initialState = {
  isAuthenticated: false,

}


export default function AuthReducer(state= initialState, action) {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true
      }
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false
      }
      default: return state;
    }

}
