import React from 'react';
import './Intro.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <Row className="align-middle Intro">
    <Column medium={6} small={12}>
      <h2 className="bold">Hello, my name <br /> is Lucie Gordon<span className="pink">.</span></h2>
      <p className="Intro--sub-heading">I design thoughtful digital experiences and <br className="hide-for-small-only" /> playful illustrations.</p>
    </Column>

    <Column medium={6} small={12}>
      <img src="assets/SitePortraitWindow.png" className="Intro--self-portrait" />
    </Column>
  </Row>
);
