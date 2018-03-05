/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
import Comment from 'Utils/Comment.jsx';
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
        $ git add <Frag>.</Frag> <Comment>All files in CWD</Comment><br />
        $ git add <Frag>src</Frag> <Comment>All files in src/</Comment>
      </Code>
    </section>

    <section>
      <p>you can use wildcards as well</p>
      <Code>
        $ git add <Pathspec>**.py</Pathspec> <Comment>All python files recursively in CWD</Comment><br />
        $ git add <Pathspec>src/**.js</Pathspec> <Comment>All JavaScript files recursively in `src/`</Comment>
      </Code>
    </section>

    <section>
      <p>git also provided 'magic signatures'</p>
      <Code>
        $ git add <Pathspec>:/**.js</Pathspec> <Comment>Matches from top-level of repo</Comment><br />
        $ git add -- <Frag>':/**.js :/!webpack.config.js'</Frag> <Comment>! will exclude paths</Comment>
      </Code>
    </section>
  </Fragment>
);

const Pathspec = props => <Fragment>-- <span className='fragment'>'{props.children}'</span></Fragment>;
const Frag = props => <span className='fragment'>{props.children}</span>;
