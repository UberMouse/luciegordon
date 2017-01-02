import React from 'react';
import './Contact.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <Row className="align-middle Contact" isColumn>
    <h2><span className="Contact--unbold">Email me</span> email@email.com</h2>
    <h2><span className="Contact--unbold">Find me at</span> Mt Victoria, Wellington, New Zealand</h2>
  </Row>
);
