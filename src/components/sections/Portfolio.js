import React from 'react';
import './Portfolio.css';
import { Row, Column } from 'react-foundation';
import Modal from 'react-modal';
import map from 'lodash/map';
import PortfolioItem from '../PortfolioItem';
import PortfolioMetadata from '../../PortfolioMetadata';

export default () => (
  <div>
    <Row className="MyWork--row">
      {map(PortfolioMetadata, metadata => <PortfolioItem {...metadata} />)}
    </Row>
  </div>
);
