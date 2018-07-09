/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  Code,
  Comment
} from 'Utils';
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
        <Code>
          $ git grep TODO <Comment>find TODO in CWD</Comment><br />
          $ git grep TODO feature-branch <Comment>find TODO in CWD in 'feature-branch'</Comment><br />
          $ git grep TODO --no-index     <Comment>including files not managed by git</Comment><br />
          $ git grep TODO --ignore-case  <Comment>case insensitive search</Comment><br />
        </Code>
      </article>
    </section>

    <section>
      <Code caption='including a pathspec'>
        $ git grep TODO -- 'README.md' <br />
        $ git grep TODO -- 'src' <br />
        $ git grep TODO -- '**/*.js' <br />
        $ git grep TODO -- ':/' <br />
        $ git grep -i TODO feature-branch -- ':/src/**/*.js' <br />
      </Code>
    </section>
  </Fragment>
);
