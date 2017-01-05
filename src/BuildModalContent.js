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

    if (type === 'text') {
      return (
        <Row isColumn className={className}>
          <p className="Modal--description">{contentItem.content}</p>
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
