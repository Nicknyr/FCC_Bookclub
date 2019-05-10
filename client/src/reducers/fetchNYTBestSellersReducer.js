
export default function reducer (state = {
  data: {},
  books: '',
  copyright: ''
}, action) {
  switch(action.type) {
    case "FETCH_NYT_BOOKS": {
           return {
               ...state,
               fetching: true
           }
       }
       case "FETCH_NYT_BOOKS_REJECTED": {
           return {
               ...state,
               fetching: false,
               error: action.payload
           }
       }
       case "FETCH_NYT_BOOKS_FULFILLED": {
           return {
               ...state,
               fetching: false,
               fetched: true,
               data: action.payload,
               copyright: action.payload.copyright
           }
       }
   default: return state;
  }

}
