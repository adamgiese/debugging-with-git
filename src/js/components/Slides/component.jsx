/* global document */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from '../Slide/component.jsx';
import Fragment from '../Fragment/component.jsx';
import TitleSlide from '../Content/Title/index.jsx';
import GrepSlides from '../Content/grep/index.jsx';
import LogSlides from '../Content/log/index.jsx';
import BlameSlides from '../Content/blame/index.jsx';
import BisectSlides from '../Content/bisect/index.jsx';
import DiffSlides from '../Content/diff/index.jsx';
/* eslint-ensable no-unused-vars */

class Slides extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler.bind(this));
  }

  keydownHandler(e) {
    switch (e.keyCode) {
      case 37: // left arrow
        this.props.decrementSlide();
        break;
      case 39: // right arrow
        this.props.incrementSlide();
        break;
      default:
        break;
    }
  }

  render() {
    const {
      activeSlide,
    } = this.props;

    const slideList = [
      <TitleSlide />,
      ...DiffSlides,
      ...BlameSlides,
      // ...LogSlides,
      ...GrepSlides,
      ...BisectSlides,
    ];
    const slides = slideList.map((value, index) => {
      return <Slide key={index} position={index + 1} activeSlide={activeSlide}>{value}</Slide>;
    });
    return (
      <ul className="slides">
        {slides}
      </ul>
    );
  }
}

export default Slides;
