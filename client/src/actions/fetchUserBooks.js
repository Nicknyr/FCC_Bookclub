import axios from 'axios';

const key = require('./config/keys').mlabKey;

// Gets the "users" document
// https://api.mlab.com/api/1/databases/bookclub/collections/users?apiKey=${key}

// Gets all collections
// https://api.mlab.com/api/1/databases/bookclub/collections?apiKey=${key}


export function fetchUserBooks() {
  return function(dispatch) {
    dispatch({ type: "FETCH_USER_BOOKS"})
    axios.get(`https://api.mlab.com/api/1/databases/bookclub/collections/users?apiKey=${key}`)
      .then((response) => {
        dispatch({
          type: "FETCH_USER_BOOKS_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_USER_BOOKS_REJECTED",
          payload: err
        })
      })
  }
}
