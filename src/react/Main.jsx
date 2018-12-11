import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

const styles = require('../styles/components/main-cmp.scss');

const Main = ({ name, page, content, children }) => (
    <main className={styles['root']} id={name}>
        <Content blocks={content} page={page} />
        {children}
    </main>
);

Main.propTypes = {
    children: PropTypes.object,
    content: PropTypes.array,
    name: PropTypes.string,
    page: PropTypes.string,
};

Main.defaultProps = {
    children: undefined,
    content: undefined,
    name: '',
    page: '',
};

export default Main;
