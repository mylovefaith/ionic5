import { combineReducers } from 'redux';
import { UserReducer, MemberReducer } from './reducers';

const appReducer = combineReducers({ UserReducer, MemberReducer });

export default appReducer;
