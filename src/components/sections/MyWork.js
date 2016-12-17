import React from 'react';
import './MyWork.css';
import { Row, Column } from 'react-foundation';

export default () => (
  <div>
    <Row isColumn>
      <h2>Recent Work</h2>
    </Row>
    <Row className="MyWork--row">
      <Column className="MyWork--image" medium={4}>
        <img src="http://placehold.it/400x400" />
      </Column>
      <Column className="MyWork--image" medium={4}>
        <img src="http://placehold.it/400x400" />
      </Column>
      <Column className="MyWork--image" medium={4}>
        <img src="http://placehold.it/400x400" />
      </Column>
    </Row>
    <Row className="MyWork--row">
      <Column className="MyWork--image" medium={4}>
        <img src="http://placehold.it/400x400" />
      </Column>
      <Column className="MyWork--image" medium={4}>
        <img src="http://placehold.it/400x400" />
      </Column>
      <Column className="MyWork--image" medium={4}>
        <img src="http://placehold.it/400x400" />
      </Column>
    </Row>
  </div>
);
