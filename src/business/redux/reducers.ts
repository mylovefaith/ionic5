import { combineReducers } from 'redux';

import { initReducer } from './init';
import { loadingReducer } from './loading';
import { routerReducer } from './router';
import { userReducer } from './user';

import { groupReducer } from './group';
import { storeReducer } from './store';

const appReducer = combineReducers({
  init: initReducer,
  loading: loadingReducer,
  routing: routerReducer,
  user: userReducer,
  store: storeReducer,
  group: groupReducer,
});

export default appReducer;
