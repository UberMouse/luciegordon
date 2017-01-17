import React from 'react';
import './About.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <Row className="align-middle MyStory">
    <Column className="MyStory--text" medium={6} small={12}>
      <h2>My Story</h2>
      <br />
      <p>I have developed a distinct aesthetic over the years; combining colourful minimalism, geometric shapes and playful characters.</p>
      <br />
      <p>I grew up in Wellington, New Zealand and studied Visual Communication Design at the Massey University College of Creative Arts.</p>
    </Column>
    <Column medium={6} small={12} className="MyStory--character">
      <img src="assets/SelfPortraitAbout.png" />
    </Column>
  </Row>
);
