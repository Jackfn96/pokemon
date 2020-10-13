import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Favourites from '../pokemon/Favourites';


export default class NavBar extends Component {

render() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top mb-2">
      <a href="/" className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>Pokedex</a>
      <Link to="/Favourites" className="text-light">Favourite Pokemon </Link>
      </nav>
    </div>
  );
}
}
