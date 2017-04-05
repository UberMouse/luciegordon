import React, { Component, PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import Modal from 'react-modal';
import './PortfolioModal.css';

const styleOverrides = {
  overlay: {
    backgroundColor: 'rgba(47, 67, 79, 0.75)',
    zIndex: 2,
  },
};

export default ({open, header, children, skills, closeCb}) => (
  <Modal
    isOpen={open}
    contentLabel="portfolio-modal"
    style={styleOverrides}
    className="Modal--content"
  >
    <div className="Modal--header">
      <i
        className="Modal--close fa fa-times"
        onClick={closeCb}
      ></i>
    </div>

    <Row>
      <Column className="align-center">
        <h1 className="Modal--title bold pink">
          {header}
        </h1>
      </Column>
    </Row>

    {children}

    <Row isColumn className="align-center">
      <a href="javascript:void(0)" className="button Modal--close-btn" onClick={closeCb}>Close</a>
    </Row>
  </Modal>
);
