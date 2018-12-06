import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import Figure from './Figure';

const htmlToReactParser = new Parser();
const styles = require('../styles/components/article-cmp.scss');

console.log('Article - styles: ', styles);

class Article extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    let extraStyles;

    const {
      type,
      image,
      index,
      title,
      contentPath,
      isPremium,
      lead
    } = this.props;

    if (type === 'full-mini') extraStyles = { maxHeight: `${image.height}px` };

    return (
      <article
        className={`${styles['root']} ${styles[type]}`}
        id={`art-cmp-${type}-${index}`}
        style={extraStyles}
      >
        <h2>{htmlToReactParser.parse(title)}</h2>
        {typeof image !== 'undefined' && image.imgPath !== '' && (
          <Figure
            contentPath={contentPath}
            index={index}
            isPremium={isPremium}
            {...image}
          />
        )}
        <p>{htmlToReactParser.parse(lead)}</p>
      </article>
    );
  }
}

Article.defaultProps = {
  contentPath: '',
  image: {},
  isPremium: false,
  lead: PropTypes.bool,
  title: '',
  type: ''
};

Article.propTypes = {
  contentPath: PropTypes.string,
  image: PropTypes.object,
  index: PropTypes.number.isRequired,
  isPremium: PropTypes.bool,
  lead: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string
};

export default Article;
