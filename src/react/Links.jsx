import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const styles = require('../styles/components/links-cmp.scss');

console.log('Links - styles: ', styles);

const Links = ({ name, nav }) => (
  <ul className={styles['root']} id={name}>
    {typeof nav !== 'undefined' && nav.length > 0 ? (
      nav.map((link, idx) => <Link key={idx.toString()} {...link} />)
    ) : (
      <li className="root__item">Pas de liens</li>
    )}
  </ul>
);

Links.defaultProps = {
  name: '',
  nav: []
};

Links.propTypes = {
  name: PropTypes.string,
  nav: PropTypes.array
};

export default Links;
