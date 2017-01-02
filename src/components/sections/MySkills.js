import React from 'react';
import './MySkills.css';
import { Row, Column } from 'react-foundation';

const Skill = ({icon, caption, description}) => (
  <Column className="MySkills--skill" medium={5}>
    <img className="MySkills--image" src={`assets/myskills-${icon}.png`} />
    <h2 className="MySkills--caption">{caption}</h2>
    <p className="MySkills--description">Lorem ipsum dolor sit amet, magna sit, sapien ipsam volutpat euismod proin, mi euismod</p>
  </Column>
);

export default () => (
  <div>
    <Row className="align-justify">
      <Skill icon="webdesign"    caption="Web Design"      description="TBD" />
      <Skill icon="ux"           caption="User Experience" description="TBD" />
    </Row>
    <Row className="align-justify">
      <Skill icon="appdesign"    caption="App Design"      description="TBD" />
      <Skill icon="illustration" caption="Illustration"    description="TBD" />
    </Row>
  </div>
);
