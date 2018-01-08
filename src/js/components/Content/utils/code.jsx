/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const Code = (props) => {
  const {
    children,
    caption,
  } = props;

  return (
    <div className='code'>
      <pre><code className='code--content'>{children}</code></pre>
      <p className='code-caption'>{caption}</p>
    </div>
  );
};

export default Code;
