import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
      div {
        text-align: center;
      }
        `}</style>
      <h1>Billy's Beers</h1>
      <h4>Drinking beer, smoking cigarettes and pickin' up chicks.</h4>
      <Link to="/">Home</Link> | <Link to="/newbeer">Create Beer</Link>
    </div>
  );
}

export default Header;