import React, { Component } from 'react';
import Section from './components/Section';
import * as Sections from './components/sections';
import map from 'lodash/map';
import zip from 'lodash/zip';
import { Row } from 'react-foundation';

const sectionIntroductions = {
  Portfolio: {
    header: 'Portfolio',
    subHeader: 'Recent projects I have worked on and enjoyed being involved in.'
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      password: '',
      authenticated: false,
    };
  }

  updatePassword = (e) => {
    this.setState({password: e.target.value}, this.unlockIfCorrectPassword);
  }

  unlockIfCorrectPassword = () => {
    if (this.state.password === "lucietaylor")
      this.setState({authenticated: true});
  }

  authenticated = () => {
    var sectionNumber = -1;
    const builtSections = map(Sections, (SectionComponent, name) => {
      const sectionName = name === 'Intro' || name == 'Header' ? null : name;

      sectionNumber += 1;
      return (
        <Section key={name} heading={sectionIntroductions[sectionName]} anchor={sectionName} oddEven={sectionNumber % 2 == 0}>
          <SectionComponent />
        </Section>
      )
    });

    return (
      <div>
        {builtSections}
      </div>
    );
  }

  unauthenticated = () => {
    return (
      <Row isColumn className="align-middle" style={{marginTop: '30vh', textAlign: 'center'}}>
        <Row className="small-12">
          <h1 style={{marginLeft: 'auto', marginRight: 'auto', paddingBottom: '3rem'}}>
            Enter the given password <br /> to view this site
          </h1>
        </Row>
        <Row className="small-12">
          <input type="password" className="password-input" value={this.state.password} onChange={this.updatePassword} placeholder="Password"/>

        </Row>
      </Row>
    );
  }

  render() {
    const { authenticated } = this.state;

    if (authenticated)
      return this.authenticated();

    return this.unauthenticated();
  }
}

export default App;
