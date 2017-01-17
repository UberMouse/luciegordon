import React from 'react';
import './Portfolio.css';
import { Row, Column } from 'react-foundation';
import Modal from 'react-modal';
import map from 'lodash/map';
import PortfolioItem from '../PortfolioItem';
import PortfolioMetadata from '../../PortfolioMetadata';

export default () => (
  <div>
    <Row isColumn>
      <h2>Recent Work</h2>
    </Row>
    <Row className="MyWork--row">
      {map(PortfolioMetadata, metadata => <PortfolioItem {...metadata} />)}
    </Row>
  </div>
);
