import React from 'react';
import PropTypes from 'prop-types';

import PreHeader from './PreHeader';
import Logo from './Logo';
import Categories from './Categories';

const styles = require('../styles/components/header-cmp.scss');

console.log('Header - styles: ', styles);

const Header = ({ name, preHeader, categories }) => (
  <header className={styles['root']} id={name}>
    <PreHeader name={`websites-nav-cmp-${name}`} {...preHeader} />
    <Logo />
    <Categories name={`cat-nav-cmp-${name}`} {...categories} />
  </header>
);

Header.defaultProps = {
  name: ''
};

Header.propTypes = {
  categories: PropTypes.string.isRequired,
  name: PropTypes.string,
  preHeader: PropTypes.string.isRequired
};

export default Header;
