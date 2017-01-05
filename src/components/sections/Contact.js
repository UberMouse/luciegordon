import React from 'react';
import './Contact.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <div>
    <Row className="align-middle Contact" isColumn>
      <h2><span className="Contact--unbold">Email me</span> luciejgordon&#64;gmail&#46;com</h2>
      <h2><span className="Contact--unbold">Find me at</span> Wellington, New Zealand</h2>
    </Row>

    <Row className="align-center Contact--back-to-top">
      <Column medium={1} small={3}>
        <a href="#top"><img src="assets/Arrow.png" /></a>
      </Column>
    </Row>
  </div>
);
