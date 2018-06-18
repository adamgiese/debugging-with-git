/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
/* eslint-ensable no-unused-vars */

export default () => (
  <Fragment>
    <section>
      <h2>git blame</h2>
    </section>

    <section>
      <article>
        <Code caption="Blames every line in a given file">
          $ git blame README.md
        </Code>
        <Code caption="Blames lines in absolute range in a given file">
          $ git blame -L4,6 README.md
        </Code>
        <Code caption="Blames lines in range relative to a RegEx in a given file">
          $ git blame -L'/TODO/',+10 README.md
        </Code>
        <Code caption="Blames lines in file at a specific commit">
          $ git blame 1b180ec8e^ README.md
        </Code>
      </article>
    </section>
  </Fragment>
);
