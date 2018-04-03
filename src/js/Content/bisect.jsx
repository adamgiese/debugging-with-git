/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
import Comment from 'Utils/Comment.jsx';
/* eslint-ensable no-unused-vars */

export default () => (
  <Fragment>
    <section>
      <h2>git bisect</h2>
    </section>

    <section>
      <h3>What is <code>git bisect</code>?</h3>
      <p className='fragment'>A binary search to find the commit that introduced a bug</p>
      <p className='fragment'>This means the maximum number of tested commits is greatly reduced - you can search 1024 commits in 10 bisections.</p>
    </section>

    <section>
      <h3>How does git bisect work?</h3>
      <Code caption='Start the bisect'>$ git bisect start</Code>
      <Code caption='Mark the first known "bad" commit'>
        $ git bisect bad <Comment>marks HEAD as a bad commit</Comment>
      </Code>
      <Code caption='Mark the latest known "good" commit'>
        $ git bisect good v1.2.3 <Comment>marks v1.2.3 as a good commit</Comment>
      </Code>
      <Code caption='As bisect navigates you, mark each commit as good or bad'>
        $ git bisect good <Comment>bisect will navigate you in a detached HEAD</Comment><br />
        $ git bisect bad <Comment>mark each commit as good or bad</Comment><br />
        $ git bisect bad <Comment>each bisect cuts out half of the remaining culprits</Comment><br />
      </Code>
      <Code>
        $ git bisect reset <Comment>at any point you can reset</Comment><br />
      </Code>
    </section>

    <section>
      <h3>automating the bisect</h3>
      <Code caption='grab some ☕️ and let your computer do the work'>
        $ git bisect run COMMAND<br />
        $ git bisect run docker-compuse run tests
      </Code>
    </section>
  </Fragment>
);
