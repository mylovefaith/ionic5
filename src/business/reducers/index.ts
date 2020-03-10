import { combineReducers } from 'redux';

import globalReducer from './global';
import loadingReducer from './loading';
import routingReducer from './routing';
import groupReducer from './group';

const appReducer = combineReducers({ 
  global: globalReducer, 
  group: groupReducer, 
  loading: loadingReducer,
  routing: routingReducer, 
});

export default appReducer;
