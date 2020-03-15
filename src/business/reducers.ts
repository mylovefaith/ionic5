import { combineReducers } from 'redux';

import { initReducer } from './global/init';
import { loadingReducer } from './global/loading';
import { routerReducer } from './global/router';

import { groupReducer } from './screens/group';

const appReducer = combineReducers({ 
  global: initReducer, 
  loading: loadingReducer,
  routing: routerReducer, 
  group: groupReducer, 
});

export default appReducer;
