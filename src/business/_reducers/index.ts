import { combineReducers } from 'redux';

import { initReducer } from '../global/init';
import loadingReducer from './loading';
import { routerReducer } from '../global/router';
import groupReducer from './group';

const appReducer = combineReducers({ 
  global: initReducer, 
  group: groupReducer, 
  loading: loadingReducer,
  routing: routerReducer, 
});

export default appReducer;
