import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';
import {composeWithDevTools} from 'remote-redux-devtools';
import middleware from './middleware';
import reducer from './reducer';

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
  reduxLoop.install()
);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
