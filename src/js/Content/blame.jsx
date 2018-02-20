/* eslint-disable no-unused-vars */
import React from 'react';
import Code from 'Utils/Code.jsx';
/* eslint-ensable no-unused-vars */

const Title = () => (
  <h2>git blame</h2>
);

const Usage = () => (
  <article>
    <Code caption="Blames every line in a given file">
      > git blame README.md
    </Code>
    <Code caption="Blames lines in absolute range in a given file">
      > git blame -L4,6 README.md
    </Code>
    <Code caption="Blames lines in range relative to a RegEx in a given file">
      > git blame -L'/TODO/',+10 README.md
    </Code>
    <Code caption="Blames lines in file at a specific commit">
      > git blame 1b180ec8e^ README.md
    </Code>
  </article>
);

const slides = [
  <Title />,
  <Usage />,
];

export default slides;