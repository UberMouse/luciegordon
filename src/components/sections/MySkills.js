import React from 'react';
import './MySkills.css';
import { Row, Column } from 'react-foundation';

const Skill = ({icon, caption, description}) => (
  <Column className="MySkills--skill" medium={3}>
    <img className="MySkills--image" src={`assets/myskills-${icon}.png`} />
    <p className="MySkills--caption">{caption}</p>
    <p>{description}</p>
  </Column>
);

export default () => (
  <div>
    <Row>
      <Column className="MySkills--text" medium={12}>
        <h2>My Skills</h2>
        <br />
        <br />
      </Column>
    </Row>
    <Row>
      <Skill icon="webdesign"    caption="Web Design"      description="TBD" />
      <Skill icon="ux"           caption="User Experience" description="TBD" />
      <Skill icon="appdesign"    caption="App Design"      description="TBD" />
      <Skill icon="illustration" caption="Illustration"    description="TBD" />
    </Row>
  </div>
);
