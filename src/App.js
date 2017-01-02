import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import * as Sections from './components/sections';
import map from 'lodash/map';
import zip from 'lodash/zip';

const titleMapping = {
  Intro: null,
  MyStory: 'About',
  MySkills: 'Skills',
  MyWork: 'Portfolio',
  Contact: 'Contact',
};

class App extends Component {
  render() {
    const builtSections = map(Sections, (SectionComponent, name) => {
      const title = titleMapping[name];

      return (
        <Section key={name} title={title}>
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
