import React from 'react';
import './Section.css';
import { Row, Column } from 'react-foundation';

export default ({children, navigateToNextSectionCb}) => {
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  return (
    <div className="Section" style={{height: `${viewportHeight}px`}}>
      {children}

      <Row className="align-center align-bottom Section--arrow">
        <Column medium={1}>
          <img src="assets/Arrow.png" onClick={navigateToNextSectionCb}/>
        </Column>
      </Row>
    </div>
  );
}
