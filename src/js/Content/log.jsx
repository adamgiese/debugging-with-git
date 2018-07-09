/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  Code,
  Comment,
  Frag
} from 'Utils';
import nikePassword from './images/nikePassword.png';
import nikeLog from './images/nikeLog.png';
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
      <Code
        caption={'The log can be limited by pathspec as well'}>
        $ git log -- "file.txt"
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
       $ git log -G'todo' -i <Comment>case insensitive</Comment><br />
       $ git log -p -G'todo' <Comment>can be combined with -p flag</Comment><br />
      </Code>
    </section>

    <section>
      <Code caption={'Limit log to patches whose log message matches a RegEx'}>
       $ <Frag>git log --grep 'WWW-1234' </Frag><br />
       $ <Frag>git log --grep 'route' --grep 'workout' </Frag><Comment>matches any</Comment><br />
       $ <Frag>git log --grep 'route' --grep 'workout' --all-match </Frag> <Comment>matches all</Comment><br />
       $ <Frag>git log --grep 'route' -grep 'workout' --invert-grep </Frag><Comment>matches none</Comment><br />
      </Code>
    </section>

    <section>
      <Code caption={'Other useful flags include, but are not limited to...'}>
       $ <Frag>git log -L 1,20:settings.py </Frag> <Comment>limit to certain lines</Comment><br />
       $ <Frag>git log --no-merges </Frag>         <Comment>ignore merge commits</Comment><br />
       $ <Frag>git log --since='2018-01-01' </Frag><Comment>limit by date</Comment><br />
       $ <Frag>git log --until='2018-01-01' </Frag><br />
       $ <Frag>git log --since='2018-01-01' --until='2018-04-01'</Frag><br />
       $ <Frag>git log --author='Adam Giese'</Frag> <Comment>limit by author</Comment><br />
       $ <Frag>git log --reverse </Frag>            <Comment>chronological order</Comment><br />
      </Code>
    </section>

    <section>
      <h3>Some debugging use cases include...</h3>
    </section>

    <section>
      <Code caption='Finding commits associated with a JIRA ticket'>
        $ git log --grep 'WWW-1234'
      </Code>
      <Code caption='Viewing the history of a file or a line range'>
        $ git log --patch --follow -- 'settings.py'<br />
        $ git log -L 84,114:settings.py
      </Code>
      <Code caption='Find all recent patches with a regex'>
        $ git log --patch --since='2 weeks ago' -G'geoip' -i
      </Code>
    </section>

    <section>
      <h3>a real life example</h3>
    </section>

    <section>
      <img
        src={nikePassword}
        style={
          {
            maxWidth: '900px',
          }
        }
      />
    </section>

    <section>
      <Code>
        $ git log -G'nike_password' --since='2 weeks ago'
      </Code>
    </section>

    <section>
      <img
        src={nikeLog}
        style={
          {
            maxWidth: '500px',
          }
        }
      />
    </section>
  </Fragment>
);
