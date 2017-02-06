import React from 'react';
import './Skills.css';
import { Row, Column } from 'react-foundation';

const Skill = ({icon, caption, description}) => (
  <Column className="MySkills--skill" medium={6}>
    <img className="MySkills--image" src={`assets/myskills-${icon}.png`} />
    <p className="MySkills--caption">{caption}</p>
    <p className="MySkills--description hide-for-small-only">{description}</p>
  </Column>
);

export default () => (
  <div className="MySkills">
    <Row className="align-center text-center">
      <Column medium={3}>
        <h1>Skills</h1>
      </Column>
    </Row>
    <Row className="align-center text-center">
      <Column medium={3}>
        <p>Areas I specialise in:</p>
      </Column>
    </Row>
    <Row className="align-justify MySkills--first-row">
      <Skill
        icon="interfacedesign"
        caption="Interface Design"
        description="Information Architecture, Wireframing, Prototyping, Visual Design, Responsive Design."
      />
      <Skill
        icon="ux"
        caption="User Experience"
        description="Competitive Analysis, Focus Groups, User Flow Mapping, Personas, Usability Testing."
      />
    </Row>
    <Row className="align-justify">
      <Skill
        icon="branding"
        caption="Graphic Design"
        description="Branding Strategy, Visual Identity and Assets, Typography, Brand Guidelines."
      />
      <Skill
        icon="illustration"
        caption="Illustration"
        description="Character Design, Digital Art, Digital Illustration, Sequential Art."
      />
    </Row>
  </div>
);
