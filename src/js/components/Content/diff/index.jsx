/* eslint-disable no-unused-vars */
import React from 'react';
import Code from '../utils/code.jsx';
/* eslint-ensable no-unused-vars */

const DiffTitle = () => (
  <div>
    <h2><code>git diff</code></h2>
    <q>Show changes between commits, commit and working tree, etc</q>
  </div>
);

const DiffCompare = () => (
  <div>
    <Code caption='Prints differences between the working tree and the index' >
> git diff
    </Code>
    <Code caption='Prints differences between the working tree and the tip of the specified branch'>
> git diff master
    </Code>
  </div>
);

const slides = [
  <DiffTitle />,
  <DiffCompare />,
];

export default slides;
