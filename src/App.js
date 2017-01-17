import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import * as Sections from './components/sections';
import map from 'lodash/map';
import zip from 'lodash/zip';

class App extends Component {
  render() {
    const builtSections = map(Sections, (SectionComponent, name) => {
      const sectionName = name === 'Intro' ? null : name;

      return (
        <Section key={name} title={sectionName} anchor={sectionName}>
          <SectionComponent />
        </Section>
      )
    });

    return (
      <div>
        <Header />

        {builtSections}
      </div>
    );
  }
}

export default App;
