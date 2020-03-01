import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './appReducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const MIDDLEWARE = composeEnhancers(applyMiddleware(thunk));

export default createStore(appReducer, {}, MIDDLEWARE);
