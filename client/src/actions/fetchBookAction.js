import axios from "axios";

export function fetchBook() {
    return function(dispatch) {
        dispatch({ type: "FETCH_BOOK"})
        axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json')
            .then((response) => {
                dispatch({
                    type: "FETCH_BOOK_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_BOOK_REJECTED",
                    payload: err
                })
            })
    }
}
