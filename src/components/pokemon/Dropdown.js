import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import Compare from './Compare';

var retrieveList = [];
var list_2 = [];
var names = [];
export default class Dropdown extends Component {

  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
    pokemon: null,
    name: ''
  };

  async componentDidMount() {
    retrieveList = [];
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data['results'] })
    retrieveList.push(this.state.pokemon)

    for (var i = 0; i < retrieveList.length; i++){
      list_2.push(retrieveList[i]);
    }
    for (var j = 0; j < 100; j++) {
      names.push(list_2[0][j]['name'])
    }

    var select = document.getElementById("selectPokemon");
    var options = names;
    for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }
  }


render() {

  return (
    <div className="col-md-4 col-sm-6  mt-4 mb-5">
    <p style={{ color: 'white' }}>Select another pokemon to compare:
    <select className="ml-3 mt-3" id="selectPokemon">
    </select></p>
    <Link to="/Compare"><button type="button" class="btn btn-primary">Compare!</button></Link>
    </div>
  );
}
}
