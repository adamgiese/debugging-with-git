/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
import Comment from 'Utils/Comment.jsx';
/* eslint-ensable no-unused-vars */

export default () => (
  <Fragment>
    <section>
      <h2>git diff</h2>
      <p>compare differences between revisions</p>
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
        $ git diff master..feature <br />
        $ git diff ..origin/master <Comment>Ommited argument uses HEAD</Comment><br />
        $ git diff ..HEAD~ <Comment>Compares current commit to previous</Comment>
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
        $ git diff
      </Code>

      <Code caption='"Oh shit, what broke since diverging from master?"'>
        $ git diff master
      </Code>

      <Code caption='"Oh shit, what broke last commit?"'>
        $ git diff HEAD~
      </Code>

      <Code caption='"Oh shit, what broke in this particular file?"'>
        $ git diff master -- workout.py
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
