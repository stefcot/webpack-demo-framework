import React from 'react';
import PropTypes from 'prop-types';

import Links from './Links';

const styles = require('../styles/components/preheader-cmp.scss');

console.log('PreHeader - styles: ', styles);

const PreHeader = ({ name, nav }) => (
  <nav className={styles['root']} id={name}>
    <Links name={`preheader-lnks-cmp-${name}`} nav={nav} />
  </nav>
);

PreHeader.defaultProps = {
  name: '',
  nav: []
};

PreHeader.propTypes = {
  name: PropTypes.string,
  nav: PropTypes.array
};

export default PreHeader;
