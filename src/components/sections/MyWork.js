import React from 'react';
import './MyWork.css';
import { Row, Column } from 'react-foundation';
import Modal from 'react-modal';
import PortfolioItem from '../PortfolioItem';

export default () => (
  <div>
    <Row isColumn>
      <h2>Recent Work</h2>
    </Row>
    <Row className="MyWork--row">
      <PortfolioItem thumb="Mysci"      hoverText="Mysci"/>
      <PortfolioItem thumb="AnyQ"       hoverText="AnyQuestions"/>
      <PortfolioItem thumb="PokerCards" hoverText="Planning Poker Cards"/>
      <PortfolioItem thumb="EvM"        hoverText="Earth v The Moon"/>
      <PortfolioItem thumb="NZ"         hoverText="Destination New Zealand"/>
      <PortfolioItem thumb="Ed"         hoverText="Ed the Axolotl"/>
    </Row>
  </div>
);
