import React from 'react';
import PropTypes from 'prop-types';

import Links from './Links';

const styles = require('../styles/components/categories-cmp.scss');

const Categories = ({ name, nav }) => (
  <nav className={styles['root']} id={name}>
    <Links name={`cat-lnks-cmp-${name}`} nav={nav} />
  </nav>
);

Categories.defaultProps = {
  name: '',
  nav: []
};

Categories.propTypes = {
  name: PropTypes.string,
  nav: PropTypes.array
};

export default Categories;
