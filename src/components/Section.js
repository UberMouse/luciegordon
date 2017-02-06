import React from 'react';
import './Section.css';
import { Row, Column } from 'react-foundation';
import cx from 'classnames';

const Section = ({children, heading, anchor, oddEven}) => {
  const header = () => (
    <Row isColumn>
      <div className="Section--heading text-center">
        <h1 className="Section--header text-center bold">
          {heading.header}
        </h1>
        <p className="Section--sub-header">{heading.subHeader}</p>
      </div>
    </Row>
  );
  const classes = cx({
    Section: true,
    'align-center': true,
    [`section-background-${oddEven ? 'one' : 'two'}`]: true
  });

  return (
    <section className={classes}>
      {anchor && <a id={anchor} className="Section--anchor">[should not be visible]</a>}

      {heading && header()}

      {children}
    </section>
  );
}
Section.defaultPropTypes = {
  title: null,
};

export default Section;
