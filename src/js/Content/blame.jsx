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
      <h2>git blame</h2>
    </section>

    <section>
      <article>
        <Code>
          $ <Frag>git blame README.md</Frag>                <Comment>Blame every line in given file</Comment><br />
          $ <Frag>git blame -L4,6 README.md</Frag>          <Comment>line range of given file</Comment><br />
          $ <Frag>git blame -L'/password/',+10 README.md</Frag> <Comment>line range relative to regex</Comment><br />
          $ <Frag>git blame 1b180ec8e^ README.md</Frag>     <Comment>specificy a commit</Comment>
        </Code>
      </article>
    </section>

    <section>
      <article>
        <p>Just download a plugin for your editor or IDE.</p>
      </article>
    </section>
  </Fragment>
);
