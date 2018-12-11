import React from 'react';
import PropTypes from 'prop-types';

import Links from './Links';

const styles = require('styles/categories-cmp.scss');

const Categories = ({ page, nav }) => (
  <nav
    className={styles['root']}
    id={`cat-nav-cmp-${page}`}
    aria-labelledby={`cat-nav-cmp-${page}`}
  >
    <Links name={`cat-lnks-cmp-${page}`} nav={nav} />
  </nav>
);

Categories.defaultProps = {
  page: '',
  nav: []
};

Categories.propTypes = {
  nav: PropTypes.array,
  page: PropTypes.string
};

export default Categories;
