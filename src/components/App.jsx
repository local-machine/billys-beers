import React from 'react';
import Header from './Header';
import BeerList from './BeerList';

function App(){
  return (
    <div>
      <style global jsx>{`
          body {
            background-color: #EEF5F7;
            font-family: Helvetica;
          }
        `}</style>
      <Header/>
      <BeerList/>
    </div>
  );
}

export default App;