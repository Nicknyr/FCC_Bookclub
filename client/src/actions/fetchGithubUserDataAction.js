import axios from "axios";
const keys = require('./config/keys');

const mlabKey = keys.mlabKey;

//https://api.mlab.com/api/1/databases/my-db/collections?apiKey=myAPIKey

export function fetchGithubUserData() {
    return function(dispatch) {
        dispatch({ type: "FETCH_GITHUB_USER_DATA"})
        axios.get('https://api.mlab.com/api/1/databases/bookclub/collections/users?apiKey='+mlabKey)
            .then((response) => {
                dispatch({
                    type: "FETCH_GITHUB_USER_DATA_FULLFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_GITHUB_USER_DATA_REJECTED",
                    payload: err
                })
            })
    }
}
