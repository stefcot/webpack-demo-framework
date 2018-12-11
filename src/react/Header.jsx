import React from 'react';
import PropTypes from 'prop-types';

import PreHeader from './PreHeader';
import Logo from './Logo';
import Categories from './Categories';

const styles = require('../styles/components/header-cmp.scss');

console.log('Header - styles: ', styles);

const Header = ({ page, preHeader, categories }) => (
    <header className={styles['root']} id={`hdr-cmp-${page}`}>
        <PreHeader name={`websites-nav-cmp-${page}`} {...preHeader} />
        <Logo />
        <Categories name={`cat-nav-cmp-${page}`} {...categories} />
    </header>
);

Header.defaultProps = {
    page: '',
};

Header.propTypes = {
    categories: PropTypes.object.isRequired,
    page: PropTypes.string,
    preHeader: PropTypes.object.isRequired,
};

export default Header;
