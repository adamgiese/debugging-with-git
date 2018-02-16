/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
/* eslint-ensable no-unused-vars */

export default () => (
  <Fragment>
    <section>
      <h2>Writing a git pathspec</h2>
      <p className='fragment'>Pathspecs are patterns <q>to limit the scope of operations to some subset of the tree or worktree</q>.</p>
    </section>

    <section>
      <p>pathspecs can be as simple as a directory</p>
      <Code caption='All files in CWD'>> git add <Frag>.</Frag></Code>
      <Code caption='All files in `src/` directory'>> git add <Frag>src</Frag></Code>
    </section>

    <section>
      <p>you can use wildcards as well</p>
      <Code caption='All python files recursively in CWD'>> git add <Pathspec>**.py</Pathspec></Code>
      <Code caption='All JavaScript files recursively in `src/`'>> git add <Pathspec>src/**.js</Pathspec></Code>
    </section>

    <section>
      <p>git also provided 'magic signatures'</p>
      <Code caption='`:/` matches from the top-level of the repository'>> git add <Pathspec>:/**.js</Pathspec></Code>
      <Code caption='`!` will exclude matching paths'>> git add -- <Frag>':/**.js :/!webpack.config.js'</Frag></Code>
    </section>
  </Fragment>
);

const Pathspec = props => <Fragment>-- <span className='fragment'>'{props.children}'</span></Fragment>;
const Frag = props => <span className='fragment'>{props.children}</span>;
