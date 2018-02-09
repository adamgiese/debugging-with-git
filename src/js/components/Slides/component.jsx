/* global Reveal */
/* eslint-disable no-unused-vars */
import React from 'react';
import TitleSlide from '../Content/Title/index.jsx';
import PathspecSlides from '../Content/pathspec/index.jsx';
import GrepSlides from '../Content/grep/index.jsx';
import LogSlides from '../Content/log/index.jsx';
import BlameSlides from '../Content/blame/index.jsx';
import BisectSlides from '../Content/bisect/index.jsx';
import DiffSlides from '../Content/diff/index.jsx';
/* eslint-ensable no-unused-vars */

class Slides extends React.Component {
  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    const slideList = [
      <TitleSlide />,
      ...PathspecSlides,
      ...DiffSlides,
      ...BlameSlides,
      // ...LogSlides,
      ...GrepSlides,
      ...BisectSlides,
    ];
    const slides = slideList.map((value, index) => {
      return <section key={index} className='slide'>{value}</section>;
    });
    return (
      <div className="slides">
        {slides}
      </div>
    );
  }
}

export default Slides;
