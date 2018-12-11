import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links';

const styles = require('../styles/components/footer-cmp.scss');

console.log('Footer - styles: ', styles);

const Footer = ({ name }) => (
  <footer className={styles['root']} id={name}>
    <Links name={`ftr-nav-cmp-${name}`} />
  </footer>
);

Footer.defaultProps = {
  name: ''
};

Footer.propTypes = {
  name: PropTypes.string
};

export default Footer;
