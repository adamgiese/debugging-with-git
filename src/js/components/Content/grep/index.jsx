/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from '../utils/code.jsx';
/* eslint-ensable no-unused-vars */

const GrepTitle = () => (
  <Fragment>
    <h2>git grep</h2>
  </Fragment>
);

const GrepAdvantages = () => (
  <article>
    <h3>Why git grep?</h3>
    <ul>
      <li>Only searches files tracked by git*</li>
      <li>Allows searching of previous commits</li>
      <li>Faster</li>
    </ul>
    <p>
      <small>*(unless otherwise specified)</small>
    </p>
  </article>
);

const GrepExamples = () => (
  <div>
    <h3>Some Examples</h3>
    <ul className="examples">
      <li>
        <Code caption="Find all tracked occurances of 'TODO' within the CWD">
          > git grep TODO
        </Code>
      </li>
      <li>
        <Code caption="Find ALL occurances of 'TODO' within the CWD">
          > git grep --no-index TODO
        </Code>
      </li>
      <li>
        <Code caption="Find tracked and untracked, but not ignored, occurances of 'TODO' within the CWD">
          > git grep --untracked TODO
        </Code>
      </li>
      <li>
        <Code caption="Find tracked and untracked, but not ignored, occurances of 'TODO' within the `/src` directory">
          > git grep --untracked TODO -- src
        </Code>
      </li>
      <li>
        <Code caption="Find tracked and untracked, but not ignored, occurances of 'TODO' within the project">
          > git grep --untracked TODO -- `git rev-parse --show-toplevel`
        </Code>
      </li>
    </ul>
  </div>
);

const slides = [
  <GrepTitle />,
  <GrepAdvantages />,
  <GrepExamples />,
];

export default slides;
