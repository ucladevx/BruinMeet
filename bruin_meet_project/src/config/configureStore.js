import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index.js';

export default () => {
  return createStore(reducers, composeWithDevTools());
};
