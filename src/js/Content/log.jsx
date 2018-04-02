/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
/* eslint-ensable no-unused-vars */

export default () => (
  <Fragment>
    <section>
      <h2>git log</h2>
      <p>show commit logs</p>
    </section>

    <section>
      <Code
        caption={`Show a list of commits in reverse chronological order.
                 Includes basic information such as author, date, and message.`}>
        $ git log
      </Code>
    </section>

    <section>
      <Code
        caption={`Includes a patch history in the log.
                  Useful for seeing the exact changes made`}>
        $ git log --patch<br />
        $ git log -p
      </Code>
    </section>

    <section>
      <Code caption={'Limit log to patches containing a RegEx'}>
       $ git log -G'todo'<br />
       $ git log -p -G'todo' # can be combined with -p flag<br />
       $ git log -G'todo' -i # case insensitive
      </Code>
    </section>

    <section>
      <Code caption={'Limit log to patches whose log message matches a RegEx'}>
       $ git log --grep 'WWW-1234'<br />
      </Code>

      <Code caption={'You can match any pattern...'}>
       $ git log --grep 'route' --grep 'workout'<br />
      </Code>

      <Code caption={'...or all patterns...'}>
       $ git log --grep 'route' --grep 'workout' --all-match<br />
      </Code>

      <Code caption={'...none of the patterns!'}>
       $ git log --grep 'route' -grep 'workout' --invert-grep<br />
      </Code>
    </section>

    <section>
      <Code caption={'Other useful flags include, but are not limited to...'}>
       $ git log --no-merges<br />
       $ git log --since='2018-01-01'<br />
       $ git log --until='2018-01-01'<br />
       $ git log --author='Adam Giese'<br />
       $ git log --reverse<br />
      </Code>
    </section>
  </Fragment>
);
