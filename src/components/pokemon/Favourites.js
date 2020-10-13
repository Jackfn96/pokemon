import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';




export default class Favourites extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
    pokemon: null
  };

  async componentDidMount() {
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data['results'] })
    var names = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key   = localStorage.key(i);
      var value = localStorage.getItem(key);
      if (value === 'true') {
        names.push(key);
      }
}
alert('Your favourite Pokemon are ' + names);

  }

render() {
  return (
    <React.Fragment>
      {this.state.pokemon ? (
      <div className="row">
        {this.state.pokemon.map(pokemon => (
          <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          />
      ))}
      </div>
    ) : (
      <h1>Loading Pokemon....</h1>
    )}
    </React.Fragment>
  );
}
}
