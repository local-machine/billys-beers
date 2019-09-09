import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <h3>{props.brewery}</h3>
      <h3>{props.price}</h3>
      <h3>{props.alcoholContent}</h3>
      <hr />
    </div>
  );
}

Beer.propTypes = {
  brewery: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Beer;
