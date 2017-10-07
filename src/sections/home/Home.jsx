import React from 'react';
import Plx from 'react-plx';

import StartArrow from 'components/StartArrow/StartArrow';
import Section from 'layout/Section';

const Home = () => (
  <Section name="home" size="fullHeight" id="home">
    <Plx
      className="columns is-multiline"
      animateWhenNotInViewport
      parallaxData={[
        {
          start: '#home',
          duration: 300,
          name: 'home',
          properties: [],
        },
      ]}
    >
      <div className="home column is-half-desktop is-half-tablet ">
        <h1 className="title home-title">Jheng-Hao Lin</h1>
      </div>
      <div className="column is-centered is-12">
        <StartArrow to="about" />
      </div>
    </Plx>
  </Section>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
