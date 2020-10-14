import React, { Component } from 'react';

import AllPokemon from '../pokemon/AllPokemon';

export default class Dashboard extends Component {
  render() {
    return (

      <div className="row">
        <div className="col">
          <img id="logo" class="center" src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo-500x313.png" alt="PokemonLogo"/>
          <AllPokemon />
        </div>
      </div>
    );
  }
}
