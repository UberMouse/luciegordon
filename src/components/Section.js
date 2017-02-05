import React from 'react';
import './Section.css';
import { Row, Column } from 'react-foundation';
import cx from 'classnames';

const Section = ({children, title, anchor, oddEven}) => {
  const header = (
    <h1 className="Section--header text-center bold">
      {title}<span className="pink">.</span>
    </h1>
  );
  const classes = cx({
    Section: true,
    'align-center': true,
    [`section-background-${oddEven ? 'one' : 'two'}`]: true
  });

  return (
    <section className={classes}>

      {title && header}

      {children}
    </section>
  );
}
Section.defaultPropTypes = {
  title: null,
};

export default Section;
