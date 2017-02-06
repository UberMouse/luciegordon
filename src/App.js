import React, { Component } from 'react';
import Section from './components/Section';
import * as Sections from './components/sections';
import map from 'lodash/map';
import zip from 'lodash/zip';

const sectionIntroductions = {
  Portfolio: {
    header: 'Portfolio',
    subHeader: 'Recent projects I have worked on and enjoyed being involved in.'
  }
};

class App extends Component {
  render() {
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
}

export default App;
