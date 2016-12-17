import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import * as Sections from './components/sections';
import map from 'lodash/map';

class App extends Component {
  render() {
    const builtSections = map(Sections, (SectionComponent, name) => (
      <Section key={name}>
        <SectionComponent />
      </Section>
    ));

    return (
      <div>
        <Header />

        {builtSections}
      </div>
    );
  }
}

export default App;
