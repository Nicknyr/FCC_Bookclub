
export default function reducer (state = {
  data: {}
}, action) {
  switch(action.type) {
    case "FETCH_BOOK": {
           return {
               ...state,
               fetching: true
           }
       }
       case "FETCH_BOOK_REJECTED": {
           return {
               ...state,
               fetching: false,
               error: action.payload
           }
       }
       case "FETCH_BOOK_FULFILLED": {
           return {
               ...state,
               fetching: false,
               fetched: true,
               data: action.payload.roster
           }
       }
   default: return state;
  }

}
