import React from 'react';
import PropTypes from 'prop-types';

const Sondage = ({ index }) => <div id={`sondage-cmp-${index}`}>Sondage</div>;

Sondage.defaultProps = {
  index: 0
};

Sondage.propTypes = {
  index: PropTypes.number
};

export default Sondage;
