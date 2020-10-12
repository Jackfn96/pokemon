import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class AllPokemon extends Component {
  // state = {
  //   url: 'https://pokeapi.co/api/v2/pokemon',
  //   pokemon: null
  // }
  //
  // componentDidMount() {
  //
  // }

render() {
  return (
    <div className="row">
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>

    </div>
  );
}
}
