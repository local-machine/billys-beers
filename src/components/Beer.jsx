import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #dcdcdc;
            font-family: Helvetica;
          }
          .color-toggle:hover {
            background-color: #f4dde1;
          }
        `}</style>
      <div className="color-toggle">
        <h3>{props.name}</h3>
        <h3>{props.brewery}</h3>
        <h3>{props.price}</h3>
        <h3>{props.alcoholContent}</h3>
        <hr />
      </div>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Beer;
