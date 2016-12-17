import './Header.css';
import { Row, Column } from 'react-foundation';
import React from 'react';

export default () => (
  <Row className="Header semi-bold">
    <Column medium={6}>
      <span className="pink">Lucie Gordon</span>
    </Column>
    <Column medium={6} className="text-right">
      <a href="#" className="Header--nav-item">About</a>
      <a href="#" className="Header--nav-item">Services</a>
      <a href="#" className="Header--nav-item">Portfolio</a>
      <a href="#" className="Header--nav-item">Contact</a>
    </Column>
  </Row>
);
