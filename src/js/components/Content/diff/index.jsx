/* eslint-disable no-unused-vars */
import React from 'react';
import Code from '../utils/code.jsx';
/* eslint-ensable no-unused-vars */

const Title = () => (
  <h2>git diff</h2>
);

const Overview = () => (
  <article>
    <h3>overview</h3>
    <Code caption='Prints differences between the working tree and the index' >
      > git diff
    </Code>
    <Code caption='Prints differences between the working tree and the tip of the specified branch'>
      > git diff master
    </Code>
    <Code caption='Prints differences between two commits'>
      > git diff master..2197b13e
    </Code>
    <Code caption='Prints differences in a path between two commits'>
      > git diff master..2197b13e -- src
    </Code>
  </article>
);

const slides = [
  <Title />,
  <Overview />,
];

export default slides;
