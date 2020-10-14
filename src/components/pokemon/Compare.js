import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class Compare extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
    pokemon: null
  };

render() {
  return (
<div>Compare</div>
  );
}
}
