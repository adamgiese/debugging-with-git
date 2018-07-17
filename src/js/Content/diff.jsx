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
      <h2>git diff</h2>
    </section>

    <section>
      <Code
        caption={`Prints differences between the working tree and the index.
                  This is the most common usage, but git diff is capable of much more.`}>
        $ git diff
      </Code>
    </section>

    <section>
      <Code
        caption={`Prints differences between the working tree and the selected branch.
                  This is useful for figuring out where you may have broken something.`}>
        $ git diff master
      </Code>
    </section>

    <section>
      <Code
        caption={'Prints differences between any two commits.'}>
        $ <Frag>git diff master..feature <br /></Frag>
        $ <Frag>git diff ..origin/master <Comment>Ommited argument uses HEAD</Comment><br /></Frag>
        $ <Frag>git diff ..HEAD~         <Comment>Compares current commit to previous</Comment></Frag>
      </Code>
    </section>

    <section>
      <Code
        caption={`By adding a pathspec, you can limit the scope of the diff to the specified path.
                  This is useful if you have a single file or directory you'd like to compare`}>
        $ git diff master..feature/year-in-review -- ':/src/**.jsx'
      </Code>
    </section>

    <section>
      <h3>Some debugging use cases include...</h3>
    </section>

    <section>
      <Code caption='"Oh shit, what just broke?"'>
        $ <Frag>git diff</Frag>
      </Code>

      <Code caption='"Oh shit, what broke since diverging from master?"'>
        $ <Frag>git diff master</Frag>
      </Code>

      <Code caption='"Oh shit, what broke last commit?"'>
        $ <Frag>git diff HEAD~</Frag>
      </Code>

      <Code caption='"Oh shit, what broke in this particular file?"'>
        $ <Frag>git diff master -- workout.py</Frag>
      </Code>
    </section>

    {/*
      <Code caption='Prints differences between the working tree and the tip of the specified branch'>
        $ git diff master
      </Code>
      <Code caption='Prints differences between two commits'>
        $ git diff master..2197b13e
      </Code>
      <Code caption='Prints differences in a path between two commits'>
        $ git diff master..2197b13e -- src
      </Code>
    */}
  </Fragment>
);
