export default function reducer( state = {
  data: {}
}, action) {
  switch(action.type) {
    case "FETCH_USER_BOOKS": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_USER_BOOKS_REJECTED":  {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_USER_BOOKS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload
      }
    }
    default: return state;
  }
}
