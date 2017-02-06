import './Header.css';
import { Row, Column } from 'react-foundation';
import React from 'react';
import Hamburger from '../Hamburger';
import map from 'lodash/map';

const menuItems = map(
  ['Portfolio', 'Skills', 'About', 'Contact'],
  item => (
    <a href={`#${item}`} className="Header--nav-item">{item}</a>
  )
);

export default () => {
  return (
    <div>
      <a id="top"></a>

      <Row className="Header semi-bold show-for-large align-middle">
        <Column medium={6} className="Header--title">
          <span className="pink">Lucie Gordon</span>
        </Column>
        <Column medium={6} className="text-right Header--nav-items">
          {menuItems}
        </Column>
      </Row>

      <div className="hide-for-large">
        <Hamburger>
          {menuItems}
        </Hamburger>
      </div>
    </div>
  );
}
