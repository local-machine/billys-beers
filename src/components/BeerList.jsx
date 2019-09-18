import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props){
  return (
    <div>
      <hr/>
      {props.beerList.map((beer, index) =>
        <Beer name={beer.name}
          brewery={beer.brewery}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          key={index} />
      )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;

