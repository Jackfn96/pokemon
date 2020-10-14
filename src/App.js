import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from "./components/layout/NavBar";

import Dashboard from './components/layout/Dashboard';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Pokemon from './components/pokemon/PokemonMain';
import Favourites from './components/pokemon/Favourites';
import Compare from './components/pokemon/Compare';


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar/>
        <div className="container">

          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/pokemon/:pokeIndex" component={Pokemon}/>
            <Route exact path="/Compare" component={Compare}></Route>
            <Link to="/Favourites" component={Favourites}></Link>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
