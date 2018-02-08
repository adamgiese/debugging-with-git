/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const Title = () => (
  <div>
    <h2>Writing a git pathspec</h2>
  </div>
);

const WhatIsIt = () => (
  <div>
    <h3>What is a pathspec?</h3>
    <p>Pathspecs are patterns <q>to limit the scope of operations to some subset of the tree or worktree</q>.</p>
  </div>
);

const slides = [
  <Title />,
  <WhatIsIt />,
];

export default slides;
