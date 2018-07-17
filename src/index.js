/* global document */
/* global Reveal */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import Subtitle from 'Utils/Subtitle.jsx';
import TitleSlide from 'Content/Title/index.jsx';
import PathspecSlides from 'Content/pathspec.jsx';
import RevisionsSlides from 'Content/revisions.jsx';
import GrepSlides from 'Content/grep.jsx';
import BlameSlides from 'Content/blame.jsx';
import DiffSlides from 'Content/diff.jsx';
import LogSlides from 'Content/log.jsx';
import BisectSlides from 'Content/bisect.jsx';
import ThankYou from 'Content/thanks.jsx';
/* eslint-ensable no-unused-vars */

require('./scss/styles.scss');

WebFont.load({
  google: {
    families: ['Averia+Serif+Libre', 'Lato'],
  },
});

class Slides extends React.Component {
  componentDidMount() {
    Reveal.initialize({
      history: true,
    });
  }

  render() {
    const slideList = [
      <TitleSlide />,

      // fundamentals
      <Subtitle>a quick review</Subtitle>,
      <PathspecSlides />,
      <RevisionsSlides />,

      // tools
      <Subtitle>Useful Tools</Subtitle>,
      <LogSlides />,
      <DiffSlides />,
      <BlameSlides />,
      <GrepSlides />,
      <BisectSlides />,
      <ThankYou />,
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
// app init
ReactDOM.render(<Slides />, document.getElementById('root'));
