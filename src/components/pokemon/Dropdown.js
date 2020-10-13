import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
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
    <div className="col-md-4 col-sm-6  mt-4 mb-5">
    <p style={{ color: 'white' }}>Select another pokemon:
    <select className="ml-3 mt-3">
      <option value="lime">Option 1</option>
      <option selected value="coconut">Option 2</option>
      <option value="mango">Option 3</option>
    </select></p>
    <Link to="/search"><button type="button" class="btn btn-primary">Compare!</button></Link>
    </div>
  );
}
}
