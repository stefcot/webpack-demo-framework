import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from './Image';

const styles = require('../styles/components/image-cmp.scss');

console.log('Figure - styles: ', styles);

class Figure extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.loaded = false;
  }

  shouldComponentUpdate() {
    return false;
  }

  handleOnLoad() {
    this.loaded = !this.loaded;
  }

  render() {
    const {
      index,
      contentPath,
      imgPath,
      alt,
      width,
      height,
      legend,
      isPremium
    } = this.props;

    const classes = classNames(styles['root'], {
      [styles['premium']]: isPremium === true
    });

    return (
      <figure className={classes} id={index}>
        <a className="img-cmp__lnk" href={contentPath}>
          <Image
            alt={alt}
            height={height}
            imgPath={imgPath}
            loaded={this.loaded}
            onImageload={this.handleOnLoad}
            width={width}
          />
        </a>
        {typeof legend !== 'undefined' && legend !== '' && (
          <figcaption>{legend}</figcaption>
        )}
      </figure>
    );
  }
}

Figure.defaultProps = {
  alt: null,
  contentPath: null,
  height: null,
  imgPath: undefined,
  isPremium: false,
  legend: null,
  width: null
};

Figure.propTypes = {
  alt: PropTypes.string,
  contentPath: PropTypes.string,
  height: PropTypes.number,
  imgPath: PropTypes.string,
  index: PropTypes.number.isRequired,
  isPremium: PropTypes.bool,
  legend: PropTypes.string,
  width: PropTypes.number
};

export default Figure;
