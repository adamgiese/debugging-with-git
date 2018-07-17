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
          $ git grep <Frag>password</Frag>                <Comment>find password in CWD</Comment><br />
          $ git grep <Frag>password feature</Frag>        <Comment>find password in CWD in 'feature'</Comment><br />
          $ git grep <Frag>password --no-index</Frag>     <Comment>including files not managed by git</Comment><br />
          $ git grep <Frag>password --ignore-case</Frag>  <Comment>case insensitive search</Comment><br />
        </Code>
      </article>
    </section>

    <section>
      <Code caption='including a pathspec'>
        $ git grep <Frag>route -- 'README.md' </Frag><br />
        $ git grep <Frag>route -- 'src' </Frag><br />
        $ git grep <Frag>route -- '**/*.js' </Frag><br />
        $ git grep <Frag>route -- ':/' </Frag><br />
        $ git grep <Frag>-i route feature-branch -- ':/src/**/*.js' </Frag><br />
      </Code>
    </section>
  </Fragment>
);
