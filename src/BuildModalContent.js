import React from 'react';
import map from 'lodash/map';
import { Row, Column } from 'react-foundation';

function buildUrl(contentRoot, name) {
  return `assets/portfolio/${contentRoot}/${name}.jpg`;
}

export default function BuildModalContent(contentRoot, content) {
  return map(content, ({type, className, ...contentItem}) => {
    if (type === 'image') {
      return (
        <Row>
          <Column className={className}>
            <img src={buildUrl(contentRoot, contentItem.name)} className="Modal--image" />
          </Column>
        </Row>
      );
    }

    if (type === 'intro') {
      const leftContent = contentItem.columns.left.map(text => <h2 className="Modal--subheader">{text}</h2>);
      const rightContent = contentItem.columns.right.map(text => <p className="Modal--description">{text}</p>);

      return (
        <Row className={`${className} Modal--intro`}>
          <Column small={12} large={6}>
            {leftContent}
          </Column>
          <Column small={12} large={6}>
            {rightContent}
          </Column>
        </Row>
      );
    }

    if (type === 'text') {
      if (contentItem.columns == undefined)
        return null;

      const leftContent = contentItem.columns.left.map(text => <p className="Modal--description">{text}</p>);
      const rightContent = contentItem.columns.right.map(text => <p className="Modal--description">{text}</p>);

      return (
        <Row className={className}>
          <Column small={12} large={6}>
            {leftContent}
          </Column>
          <Column small={12} large={6}>
            {rightContent}
          </Column>
        </Row>
      );
    }

    if (type === 'images') {
      const [image1, image2] = contentItem.names;
      return (
        <Row className={className}>
          <Column medium={6} small={12}>
            <img src={buildUrl(contentRoot, image1)} className="Modal--image" />
          </Column>
          <Column medium={6} small={12}>
            <img src={buildUrl(contentRoot, image2)} className="Modal--image" />
          </Column>
        </Row>
      );
    }

    if (type === 'header') {
      return (
        <Row isColumn className={className}>
          <h2 className="bold text-center Modal--content-header">{contentItem.content}</h2>
        </Row>
      );
    }

    if (type === 'br') {
      return <br />;
    }
  });
}
