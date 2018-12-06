import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Link from './Link';

const styles = require('../styles/components/main-cmp.scss');

const Main = ({ name, page, content, children }) => (
  <main className={styles['root']} id={name}>
    <Content blocks={content} page={page} />
    {children}
  </main>
);

Link.propTypes = {
  children: PropTypes.object,
  content: PropTypes.object,
  name: PropTypes.string,
  page: PropTypes.string
};

Link.defaultProps = {
  children: undefined,
  content: undefined,
  name: '',
  page: ''
};

export default Main;
