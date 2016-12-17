import React from 'react';
import './Intro.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <Row className="align-middle Intro">
    <Column medium={6}>
      <h1 className="bold">Hello, my name <br /> is Lucie Gordon<span className="pink">.</span></h1>
      <p>I design thoughtful digital experiences and <br /> playful illustrations.</p>
    </Column>

    <Column medium={6}>
      <img src="assets/SelfPortraitHome2.png" className="Intro--self-portrait" />
    </Column>
  </Row>
);
