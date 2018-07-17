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
      <h2>git bisect</h2>
    </section>

    <section>
      <h3>What is <code>git bisect</code>?</h3>
      <p className='fragment'>A binary search to find the commit that introduced a bug</p>
      <p className='fragment'>This means the maximum number of tested commits is greatly reduced - you can search 1024 commits in 10 bisections.</p>
    </section>

    <section className='tight-fit'>
      <Code caption='Start the bisect'>
        $ <Frag>git bisect start</Frag>
      </Code>
      <Code caption='Mark the first known "bad" commit'>
        $ <Frag>git bisect bad <Comment>marks HEAD as a bad commit</Comment></Frag>
      </Code>
      <Code caption='Mark the latest known "good" commit'>
        $ <Frag>git bisect good v1.2.3 <Comment>marks v1.2.3 as a good commit</Comment></Frag>
      </Code>
      <Code caption='As bisect navigates you, mark each commit as good or bad'>
        $ <Frag>git bisect good <Comment>bisect will navigate you in a detached HEAD</Comment><br /></Frag>
        $ <Frag>git bisect bad  <Comment>mark each commit as good or bad</Comment><br /></Frag>
        $ <Frag>git bisect bad  <Comment>each bisect cuts out half of the remaining culprits</Comment><br /></Frag>
      </Code>
      <Code>
        $ <Frag>git bisect reset <Comment>at any point you can reset</Comment><br /></Frag>
      </Code>
    </section>

    <section>
      <h3>automating the bisect</h3>
      <Code caption='grab some ☕️ and let your computer do the work'>
        $ git bisect run docker-compose run tests
      </Code>
    </section>
  </Fragment>
);
