import React from 'react';
import './Contact.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <div>
    <Row className="align-center Contact--header">
      <Column medium={5} large={4}>
        <h1>Get in touch</h1>
      </Column>
    </Row>
    <Row className="align-center Contact text-center">
      <Column medium={5}>
        <p>Email me <span className="bold">luciejgordon&#64;gmail&#46;com</span></p>
        <p>Find me at Wellington, New Zealand</p>
      </Column>
    </Row>
  </div>
);
