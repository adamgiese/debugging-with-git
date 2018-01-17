/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from '../utils/code.jsx';
/* eslint-ensable no-unused-vars */

const Title = () => (
  <Fragment>
    <h2>git grep</h2>
  </Fragment>
);

const Advantages = () => (
  <article>
    <h3>why git grep?</h3>
    <ul>
      <li>By default, only searches files tracked by git</li>
      <li>Allows searching of all commits in the repo</li>
      <li>Faster</li>
    </ul>
  </article>
);

const Default = () => (
  <article>
    <h3>default usage</h3>
    <Code caption="Find all tracked occurances of 'TODO' within the current working directory">
      > git grep TODO
    </Code>
    <Code caption="Find all tracked occurances of 'TODO' within the current working directory in 'feature-branch'">
      > git grep TODO feature-branch
    </Code>
  </article>
);

const UsefulFlags = () => (
  <article>
    <h3>an incomplete list of <br />useful grep flags</h3>
    <ul style={ { listStyle: 'none' } }>
      <li>
        <Code caption="In addition to default, include files not managed by git, including those which are untracked and ignored.">--no-index</Code>
      </li>
      <li>
        <Code caption="In addition to default, include files not tracked by git.">--untracked</Code>
      </li>
      <li>
        <Code caption="Ignore Case">-i, --ignore-case</Code>
      </li>
    </ul>
  </article>
);

const Path = () => (
  <article>
    <h3>including a pathspec</h3>
    <ul style={ { listStyle: 'none' } }>
      <li><Code caption="a file">> git grep TODO -- 'README.md'</Code></li>
      <li><Code caption="a directory">> git grep TODO -- 'src'</Code></li>
      <li><Code caption="wildcards">> git grep TODO -- '**/*.js'</Code></li>
      <li><Code caption="from top of project, regardless of current working directory">> git grep TODO -- ':/'</Code></li>
      <li><Code caption="combo!">> git grep -i TODO feature-branch -- ':/src/**/*.js'</Code></li>
    </ul>
  </article>
);

const slides = [
  <Title />,
  <Advantages />,
  <Default />,
  <UsefulFlags />,
  <Path />,
];

export default slides;
