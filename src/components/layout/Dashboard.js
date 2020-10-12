import React, { Component } from 'react';

import AllPokemon from '../pokemon/AllPokemon';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <AllPokemon />
        </div>
      </div>
    );
  }
}
