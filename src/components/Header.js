import './Header.css';
import { Row, Column } from 'react-foundation';
import React from 'react';
import Hamburger from './Hamburger';
import map from 'lodash/map';

const menuItems = map(
  ['About', 'Services', 'Portfolio', 'Contact'],
  item => (
    <a href={`#${item}`} className="Header--nav-item">{item}</a>
  )
);

export default () => {
  return (
    <div>
      <Row className="Header semi-bold">
        <Column medium={6}>
          <span className="pink">Lucie Gordon</span>
        </Column>
        <Column medium={6} className="text-right hide-for-small-only">
          {menuItems}
        </Column>
      </Row>

      <Hamburger>
        {menuItems}
      </Hamburger>
    </div>
  );
}
