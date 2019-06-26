export default function reducer( state = {
  data: {},
  username: '',
  books: ''
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
        data: action.payload,
        username: action.payload[0].username,
        books: action.payload[0].books
      }
    }
    default: return state;
  }
}
