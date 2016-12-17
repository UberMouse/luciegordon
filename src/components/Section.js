import React from 'react';
import './Section.css';
import { Row, Column } from 'react-foundation';

export default ({children}) => (
  <div className="Section">
    {children}

    <Row className="align-center Section--arrow">
      <Column medium={1}>
        <img src="assets/Arrow.png" />
      </Column>
    </Row>
  </div>
);
