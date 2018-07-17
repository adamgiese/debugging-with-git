/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  Code,
  Comment,
  Frag
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
          $ git grep <Frag>TODO</Frag>                <Comment>find TODO in CWD</Comment><br />
          $ git grep <Frag>TODO feature-branch</Frag> <Comment>find TODO in CWD in 'feature-branch'</Comment><br />
          $ git grep <Frag>TODO --no-index</Frag>     <Comment>including files not managed by git</Comment><br />
          $ git grep <Frag>TODO --ignore-case</Frag>  <Comment>case insensitive search</Comment><br />
        </Code>
      </article>
    </section>

    <section>
      <Code caption='including a pathspec'>
        $ git grep <Frag>TODO -- 'README.md' </Frag><br />
        $ git grep <Frag>TODO -- 'src' </Frag><br />
        $ git grep <Frag>TODO -- '**/*.js' </Frag><br />
        $ git grep <Frag>TODO -- ':/' </Frag><br />
        $ git grep <Frag>-i TODO feature-branch -- ':/src/**/*.js' </Frag><br />
      </Code>
    </section>
  </Fragment>
);
