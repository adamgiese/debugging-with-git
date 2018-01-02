/* eslint-disable no-unused-vars */
import React from 'react';
import Slides from '../Slides/component.jsx';
/* eslint-ensable no-unused-vars */

const App = (props) => {
  const {
    activeSlide,
    incrementSlide,
    decrementSlide,
  } = props;
  return (
    <div className='app'>
      <Slides
        activeSlide={activeSlide}
        incrementSlide={incrementSlide}
        decrementSlide={decrementSlide}
      />
    </div>
  );
};

export default App;
