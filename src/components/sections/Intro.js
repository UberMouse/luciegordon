import React from 'react';
import './Intro.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <div style={{position: 'relative'}}>
    <Row className="align-middle Intro">
      <Column medium={6} small={12} className="Intro--message">
        <h1 className="bold">Hello, my name <br /> is Lucie Gordon.</h1>
        <p className="Intro--sub-heading">I design thoughtful digital experiences and <br className="hide-for-small-only" /> playful illustrations.</p>
      </Column>

      <Column medium={6} small={12} className="Intro--self-portrait">
        <img src="assets/SitePortraitWindow.png" />
      </Column>
    </Row>
    <div className="Intro--white-line"></div>
  </div>
);
