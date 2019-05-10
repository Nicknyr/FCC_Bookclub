import {combineReducers} from 'redux';
import fetchBookReducer from './fetchBookReducer';
import fetchNYTBestSellersReducer from './fetchNYTBestSellersReducer';


export default combineReducers({
    fetchBookReducer,
    fetchNYTBestSellersReducer
})
