import React from 'react';
import PropTypes from 'prop-types';

const styles = require('../styles/components/aside-cmp.scss');

console.log('Aside - styles: ', styles);

const Aside = ({ name, children }) => (
  <aside className={styles['root']} id={name}>
    {children}
  </aside>
);

Aside.defaultProps = {
  children: []
};

Aside.propTypes = {
  children: PropTypes.array,
  name: PropTypes.string.isRequired
};

export default Aside;
