import { combineReducers } from 'redux';
import { globalReducer } from './reducers';

const appReducer = combineReducers({ global: globalReducer });

export default appReducer;
