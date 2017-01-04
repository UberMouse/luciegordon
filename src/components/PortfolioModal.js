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

export default ({open, header, closeCb}) => (
  <Modal
    isOpen={open}
    contentLabel="portfolio-modal"
    style={styleOverrides}
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
    <Row isColumn>
      <p className="Modal--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia lacinia magna imperdiet dapibus. Curabitur vitae justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget tincidunt felis, eu ullamcorper velit. Suspendisse dui est, lacinia et rhoncus vitae, vehicula viverra arcu. Praesent ligula sem, lobortis sit amet justo non, hendrerit accumsan elit. Praesent porttitor efficitur elit sit amet tincidunt. Maecenas vel velit ac sem placerat malesuada vitae a risus. Sed pellentesque rutrum ligula ut vulputate. Suspendisse potenti. In mollis imperdiet dolor quis tincidunt.</p>
    </Row>
    <Row isColumn className="align-center">
      <img src="http://placehold.it/800x500" className="Modal--image" />
    </Row>
    <Row isColumn>
      <p className="Modal--description" style={{paddingTop: '1rem'}}>Vitae, vehicula viverra arcu. Praesent ligula sem, lobortis sit amet justo non, hendrerit accumsan elit. Praesent porttitor efficitur elit sit amet tincidunt. Maecenas vel velit ac sem placerat malesuada vitae a risus. Sed pellentesque rutrum ligula ut vulputate. Suspendisse potenti. In mollis imperdiet dolor quis tincidunt.</p>
    </Row>
    <Row isColumn className="align-center">
      <a href="javascript:void(0)" className="button Modal--close-btn" onClick={closeCb}>Close</a>
    </Row>
  </Modal>
);
