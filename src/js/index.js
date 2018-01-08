/* global document, window */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App/container.jsx';
import initialState from './services/initialState';
import reducer from './services/reducer';
import { uriMiddleware } from './middleware/uri';
/* eslint-ensable no-unused-vars */

// styling
require('./../scss/styles.scss');

WebFont.load({
  google: {
    families: ['Averia+Serif+Libre', 'Lato'],
  },
});

// polyfill for older browswers
require('es6-promise').polyfill();

/* eslint-disable no-underscore-dangle */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = reduxDevTools ? compose(applyMiddleware(uriMiddleware), reduxDevTools) : applyMiddleware(uriMiddleware);
/* eslint-enable */

// setup store
const store = createStore(
  reducer,
  initialState,
  enhancer,
);

// app init
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
