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
      <h2>Writing a git pathspec</h2>
      <p className='fragment'>Pathspecs are patterns <q>to limit the scope of operations to some subset of the tree or worktree</q>.</p>
    </section>

    <section>
      <p>pathspecs can be as simple as a directory</p>
      <Code>
        $ <Frag>git add .</Frag>   <Comment>All files in CWD</Comment><br />
        $ <Frag>git add src</Frag> <Comment>All files in src/</Comment>
      </Code>
    </section>

    <section>
      <p>you can use wildcards as well</p>
      <Code>
        $ <Frag>git add -- '**.py'</Frag>     <Comment>All python files recursively in CWD</Comment><br />
        $ <Frag>git add -- 'src/**.js'</Frag> <Comment>All JavaScript files recursively in `src/`</Comment>
      </Code>
      <p className='small'>
        <em>Note: If you are using a non-Bash shell (such as zsh) you may need to wrap your pathspec in quote if they contain a wildcard</em>
      </p>
    </section>

    <section>
      <p>git also provided 'magic signatures'</p>
      <Code>
        $ <Frag>git add -- ':/**.js'</Frag> <Comment>Matches from top-level of repo</Comment><br />
        $ <Frag>git add -- ':/**.js :/!webpack.config.js'</Frag> <Comment>! will exclude paths</Comment>
      </Code>
    </section>
  </Fragment>
);

