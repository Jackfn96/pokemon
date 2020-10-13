import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';


export default class Dropdown extends Component {

  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
    pokemon: null
  };

  async componentDidMount() {
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data['results']})
  }


render() {
  return (
    <div>
    <p>Compare With:
    <select className="ml-3">
      <option value="lime">Option 1</option>
      <option selected value="coconut">Option 2</option>
      <option value="mango">Option 3</option>
    </select></p>
    <Link to="/search"><button>Compare Pokemon</button></Link>
    </div>
  );
}
}
