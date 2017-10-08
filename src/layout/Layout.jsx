import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/navbar/Navbar';
import Navlogo from './JLLogoCircle.svg';

const Layout = ({ children, data: { brand, navItemsStart, navItemsEnd } }) => (
  <div className="layout">
    <Navbar
      brand={{ ...brand, url: Navlogo }}
      navbarEnd={navItemsEnd}
      navItemsStart={navItemsStart}
    />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
Layout.defaultProps = {};

export default Layout;
