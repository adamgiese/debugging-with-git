/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import logo from './git-logo.png';
/* eslint-ensable no-unused-vars */

const TitleSlide = () => (
  <Fragment>
    <h1>
      Squashing Bugs<br />
      with<br />
      <img src={logo} style={ { maxWidth: '200px', marginTop: '.5em' } } />
    </h1>
  </Fragment>
);

export default TitleSlide;
