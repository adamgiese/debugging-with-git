/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import {
  Code,
  Comment
} from 'Utils';
/* eslint-ensable no-unused-vars */

export default () => (
  <Fragment>
    <section>
      <h2>specifying a revision</h2>
    </section>

    <section>
      <Code>
        $ <Frag>git show e7e83086cac4f105277f34599bfd83cb9e4d5e83</Frag> <Comment>sha-1 hash</Comment><br />
        $ <Frag>git show e7e8</Frag>             <Comment>subset of sha-1 - must be unambigous</Comment><br />
        $ <Frag>git show feature-branch</Frag>   <Comment>tip of a branch</Comment><br />
        $ <Frag>git show HEAD</Frag>             <Comment>your current branch</Comment><br />
        $ <Frag>git show feature-branch^</Frag>  <Comment>parent of a commit</Comment><br />
        $ <Frag>git show master^2</Frag>         <Comment>second parent (for merge commits)</Comment><br />
        $ <Frag>git show HEAD~</Frag>            <Comment>first ancestor</Comment><br />
        $ <Frag>git show HEAD~2</Frag>           <Comment>second ancestor (parent of parent)</Comment><br />
      </Code>
    </section>

    <section>
      <h2>specifying revision ranges</h2>
    </section>
    <section>
      <Code>
        $ <Frag>git log master..feature</Frag>  <Comment>commits in feature and not master</Comment><br />
        $ <Frag>git log feature..master</Frag>  <Comment>commits in master and not feature</Comment><br />
        $ <Frag>git log master...feature</Frag> <Comment>commits in master or feature, not both</Comment>
      </Code>
    </section>
  </Fragment>
);

const Frag = props => <span className='fragment'>{props.children}</span>;
