import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore.js';
import Main from './containers/main.js';
import './fonts/josefin.css';

let store = configureStore();
const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App;
