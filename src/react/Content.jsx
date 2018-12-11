import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

const styles = require('../styles/components/content-cmp.scss');

console.log('Content - styles: ', styles);

class Content extends React.Component {
  static getComponentByName(blockProperties, idx) {
    const TagName = blockProperties.type;
    const Component = lazy(() => import(`./${TagName}`));

    return (
      <Component index={idx} key={`cnt-cmp-${idx}`} {...blockProperties} />
    );
  }

  render() {
    const { page, blocks, children } = this.props;

    return (
      <div className={styles['root']} id={`cnt-cmp-${page}`}>
        {blocks.map(item => {
          const idx = Math.round(Math.random() * 100000000);

          return (
            <Suspense
              fallback={<Loader key={`ldr-cmp-${idx}`} {...item} />}
              key={`spns-cmp-${idx}`}
            >
              {Content.getComponentByName(item, idx)}
            </Suspense>
          );
        })}
        {children}
      </div>
    );
  }
}

Content.defaultProps = {
  blocks: [],
  children: []
};

Content.propTypes = {
  blocks: PropTypes.array,
  children: PropTypes.array,
  page: PropTypes.string.isRequired
};

export default Content;
