import React from 'react';
import './About.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <div className="MyStory">
    <Row className="align-center">
      <Column medium={4} className="text-center">
        <h1>About me</h1>
      </Column>
    </Row>
    <Row className="MyStory--content">
      <Column className="MyStory--text" medium={6} small={12}>
        <p>I have developed a distinct aesthetic over the years; combining colourful minimalism, geometric shapes and playful characters.</p>
        <br />
        <p>I grew up in Wellington, New Zealand and studied Visual Communication Design at the Massey University College of Creative Arts.</p>
      </Column>
      <Column medium={6} small={12} className="MyStory--image">
        <img src="assets/StoryImage.png" />
      </Column>
    </Row>
  </div>
);
