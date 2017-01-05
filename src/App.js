import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import * as Sections from './components/sections';
import map from 'lodash/map';
import zip from 'lodash/zip';

const sectionData = {
  Intro: {},
  MyStory: {
    title: 'About',
    anchor: 'About'
  },
  MySkills: {
    title: 'Skills',
    anchor: 'Services',
  },
  MyWork: {
    title: 'Portfolio',
    anchor: 'Portfolio',
  },
  Contact: {
    title: 'Contact',
    anchor: 'Contact',
  }
};

class App extends Component {
  render() {
    const builtSections = map(Sections, (SectionComponent, name) => {
      const { title, anchor } = sectionData[name];

      return (
        <Section key={name} title={title} anchor={anchor}>
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
