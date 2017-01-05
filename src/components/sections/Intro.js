import React from 'react';
import './Intro.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <Row className="align-middle Intro">
    <Column medium={8} small={12}>
      <h1 className="bold">Hello, my name <br /> is Lucie Gordon<span className="pink">.</span></h1>
      <p className="Intro--sub-heading">I design thoughtful digital experiences and playful illustrations.</p>
    </Column>

    <Column medium={4} small={12}>
      <img src="assets/SelfPortraitHome.png" className="Intro--self-portrait" />
    </Column>
  </Row>
);
