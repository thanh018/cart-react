import { combineReducers } from 'redux';
import productList from './productList';
import cart from './cart';
import message from './message';

const appReducers = combineReducers({
    productList,
    cart,
    message
});

export default appReducers;