export default function reducer (state = {
  data: {}
}, action) {
  switch(action.type) {
    case "FETCH_GITHUB_USER_DATA": {
           return {
               ...state,
               fetching: true
           }
       }
       case "FETCH_GITHUB_USER_DATA_REJECTED": {
           return {
               ...state,
               fetching: false,
               error: action.payload
           }
       }
       case "FETCH_GITHUB_USER_DATA_FULLFILLED_FULFILLED": {
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
