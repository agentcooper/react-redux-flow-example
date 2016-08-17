// @flow

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import app from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
)(createStore);

export default () => createStoreWithMiddleware(app);
