import { createStore, combineReducers } from 'redux';
import auth from './AuthReducer';

export default createStore(combineReducers({
    auth
}));

