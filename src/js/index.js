/* global document */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import Slides from './components/Slides/component.jsx';
/* eslint-ensable no-unused-vars */

require('./../scss/styles.scss');

WebFont.load({
  google: {
    families: ['Averia+Serif+Libre', 'Lato'],
  },
});

// app init
ReactDOM.render(<Slides />, document.getElementById('root'));
