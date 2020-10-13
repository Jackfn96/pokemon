import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from "./components/layout/NavBar";

import Dashboard from './components/layout/Dashboard';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
