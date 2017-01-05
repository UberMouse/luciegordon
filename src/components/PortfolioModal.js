import React, { Component, PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import Modal from 'react-modal';
import './PortfolioModal.css';

const styleOverrides = {
  overlay: {
    backgroundColor: 'rgba(47, 67, 79, 0.75)',
  },
  content: {
    backgroundColor: '#fefefe',
    padding: 0,
    textAlign: 'center',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default ({open, header, children, skills, closeCb}) => (
  <Modal
    isOpen={open}
    contentLabel="portfolio-modal"
    style={styleOverrides}
    className="Modal--content"
  >
    <div className="Modal--header">
      <span
        className="Modal--close bold"
        onClick={closeCb}
      >x</span>
    </div>

    <Row>
      <Column className="align-center">
        <h1 className="Modal--title bold text-center">
          {header}<span className="pink">.</span>
        </h1>
      </Column>
    </Row>

    <Row isColumn className="align-center">
      <p className="Modal--skills">{skills.join(', ')}</p>
    </Row>

    {children}

    <Row isColumn className="align-center">
      <a href="javascript:void(0)" className="button Modal--close-btn" onClick={closeCb}>Close</a>
    </Row>
  </Modal>
);
