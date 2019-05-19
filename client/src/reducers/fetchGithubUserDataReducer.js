export default function reducer (state = {
  data: {},
  username: '',
  name: '',
  avatar: '',
  profileUrl: ''
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
       case "FETCH_GITHUB_USER_DATA_FULLFILLED": {
           return {
               ...state,
               fetching: false,
               fetched: true,
               data: action.payload,
               username: action.payload[0].username,
               name: action.payload[0].name,
               avatar: action.payload[0].avatar,
               profileUrl: action.payload[0].profileUrl
           }
       }
   default: return state;
  }

}
