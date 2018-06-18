/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
/* eslint-ensable no-unused-vars */

export default () => (
  <Fragment>
    <section>
      <h2>git grep</h2>
    </section>

    <section>
      <article>
        <h3>why git grep?</h3>
        <ul>
          <li>By default, only searches files tracked by git</li>
          <li>Allows searching of all commits in the repo</li>
          <li>Fast! Comparable speed to to `ag`</li>
        </ul>
      </article>
    </section>

    <section>
      <h3>default usage</h3>
    </section>

    <section>
      <article>
        <Code caption="Find all tracked occurances of 'TODO' within the current working directory">
          $ git grep TODO
        </Code>
        <Code caption="Find all tracked occurances of 'TODO' within the current working directory in 'feature-branch'">
          $ git grep TODO feature-branch
        </Code>
      </article>
    </section>

    <section>
      <h3>an incomplete list of <br />useful grep flags</h3>
    </section>

    <section>
      <Code caption="In addition to default, include files not managed by git, including those which are untracked and ignored.">--no-index</Code>
      <Code caption="In addition to default, include files not tracked by git.">--untracked</Code>
      <Code caption="Ignore Case">-i, --ignore-case</Code>
      <Code caption="Use extended Regex">-E</Code>
    </section>

    <section>
      <h3>including a pathspec</h3>
    </section>
    <section>
      <Code caption="a file">$ git grep TODO -- 'README.md'</Code>
      <Code caption="a directory">$ git grep TODO -- 'src'</Code>
      <Code caption="wildcards">$ git grep TODO -- '**/*.js'</Code>
      <Code caption="from top of project, regardless of current working directory">$ git grep TODO -- ':/'</Code>
      <Code caption="combo!">$ git grep -i TODO feature-branch -- ':/src/**/*.js'</Code>
    </section>
  </Fragment>
);
