import React from 'react';
import './Section.css';
import { Row, Column } from 'react-foundation';

const Section = ({children, title, anchor}) => {
  const header = (
    <h1 className="Section--header text-center bold">
      {title}<span className="pink">.</span>
    </h1>
  );

  return (
    <section className="Section align-center">
      <a id={anchor} style={{marginBottom: '2rem'}}/>

      {title && header}

      {children}
    </section>
  );
}
Section.defaultPropTypes = {
  title: null,
};

export default Section;
