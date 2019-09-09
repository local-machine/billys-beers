import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import NewBeerForm from './NewBeerForm';
import billLaughs from '../assets/images/bill.jpg';



function App() {
  return (
    <div>
      <style global jsx>{`
          body {
            background-color: #EEF5F7;
            font-family: Helvetica;
          }
        `}</style>
      <style jsx>{`
          img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 25%;
          }
          img:hover {
            animation: shake 0.5s;
            animation-iteration-count: infinite;
          }
          
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
        `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/newbeer' component={NewBeerForm} />
      </Switch>
      <img src={billLaughs} />
    </div>
  );
}

export default App;