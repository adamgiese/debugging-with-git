/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const DiffTitle = () => (
  <div>
    <h2><code>git diff</code></h2>
    <q>Show changes between commits, commit and working tree, etc</q>
  </div>
);

const DiffCompare = () => (
  <div>
    <pre><code>
> git diff
    </code></pre>
    <p className="code-caption">Prints differences between the working tree and the index</p>
    <pre><code>
> git diff master
    </code></pre>
    <p className="code-caption">Prints differences between the working tree and the specified branch</p>
  </div>
);

const slides = [
  <DiffTitle />,
  <DiffCompare />,
];

export default slides;
