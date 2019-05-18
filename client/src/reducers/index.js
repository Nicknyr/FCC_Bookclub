import {combineReducers} from 'redux';
import fetchBookReducer from './fetchBookReducer';
import fetchNYTBestSellersReducer from './fetchNYTBestSellersReducer';
import fetchGithubUserDataReducer from './fetchGithubUserDataReducer';

export default combineReducers({
    fetchBookReducer,
    fetchNYTBestSellersReducer,
    fetchGithubUserDataReducer
})
