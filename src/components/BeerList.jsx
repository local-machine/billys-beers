import React from 'react';
import Beer from './Beer';

var masterBeerList = [
  {
    name: '1664',
    brewery: 'Kronenbourg Brewery',
    price: 5,
    alcoholContent: '5.0%'
  },
  {
    name: 'Coronita',
    brewery: 'Cervecería Modelo',
    price: 5,
    alcoholContent: '4.5%'
  },
  {
    name: 'Easy Street',
    brewery: 'Odell Brewing',
    price: 5,
    alcoholContent: '4.6%'
  }
];

function BeerList(){
  return (
    <div>
      <hr/>
      {masterBeerList.map((beer, index) =>
        <Beer name={beer.name}
          brewery={beer.brewery}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          key={index} />
      )}
    </div>
  );
}

export default BeerList;

