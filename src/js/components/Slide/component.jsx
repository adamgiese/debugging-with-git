/* eslint-disable no-unused-vars */
import React from 'react';
import {
  getSlideClass,
  deepCountComponents
} from '../../utils/utility';
/* eslint-ensable no-unused-vars */

const Slide = (props) => {
  const {
    activeSlide,
    children,
    position,
  } = props;
  const positionClass = getSlideClass(activeSlide, position);
  // const fragmentCount = deepCountComponents(children, 'Fragment');

  return (
    <li className={`slide ${positionClass}`}>{children}</li>
  );
};

export default Slide;
