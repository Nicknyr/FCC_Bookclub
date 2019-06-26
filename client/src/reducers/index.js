import {combineReducers} from 'redux';
import fetchBookReducer from './fetchBookReducer';
import fetchNYTBestSellersReducer from './fetchNYTBestSellersReducer';
import fetchGithubUserDataReducer from './fetchGithubUserDataReducer';
import fetchUserBooksReducer from './fetchUserBooksReducer';
import authReducer from './loggedInReducer';

export default combineReducers({
    fetchBookReducer,
    fetchNYTBestSellersReducer,
    fetchGithubUserDataReducer,
    fetchUserBooksReducer,
    authReducer
})
