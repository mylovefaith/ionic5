import { combineReducers } from 'redux';

import globalReducer from './global';
import loadingReducer from './loading';
import groupReducer from './group';

const appReducer = combineReducers({ 
  global: globalReducer, 
  group: groupReducer, 
  loading: loadingReducer 
});

export default appReducer;
