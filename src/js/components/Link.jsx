import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import { IconList, IconFactory } from '../utils/IconFactory';

const styles = require('../../scss/components/link-cmp.scss');

const htmlToReactParser = new Parser();

const Link = ({ type, icon, label, url }) => (
  <li
    className={styles['root']}
    id={`${type}-${Math.round(Math.random() * 100)}`}
  >
    <a className={styles['root__item']} href={url}>
      {icon && IconFactory(IconList[icon])}
      {label && (
        <span
          className={`${styles['lnk-cmp__lbl']}${
            typeof icon !== 'undefined' ? ' icon' : ''
          }`}
        >
          {htmlToReactParser.parse(label)}
        </span>
      )}
    </a>
  </li>
);

Link.defaultProps = {
  icon: undefined,
  label: undefined,
  type: '',
  url: ''
};

Link.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
};

export default Link;
