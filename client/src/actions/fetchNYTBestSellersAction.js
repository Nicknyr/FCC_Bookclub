import axios from "axios";

export function fetchNYTBestSellers() {
    return function(dispatch) {
        dispatch({ type: "FETCH_NYT_BOOKS"})
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=x615VghOt6SjmW0DwTJJ5dTRAFwSVIRY')
            .then((response) => {
                dispatch({
                    type: "FETCH_NYT_BOOKS_FULFILLED",
                    payload: response.data.results.books
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_NYT_BOOKS_REJECTED",
                    payload: err
                })
            })
    }
}
