import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';
import styled from 'styled-components';

var names = [];

const Card = styled.div`
  box-shadow: 1px 3px 3px black;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
     box-shadow: 0 14px 28px rgba(240, 231, 17, 0.79), 0 5px 5px rgba(240, 231, 17, 0.79);
   }
;`



export default class Favourites extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
    pokemon: null
  };

  async componentDidMount() {
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data['results'] })
    names = [];


  }

render() {
  names=[];
  for (var i = 0; i < localStorage.length; i++) {
    var key   = localStorage.key(i);
    var value = localStorage.getItem(key);
    if (value === 'true') {
      names.push(key);
    }
}
  return (
    <div className="row">
    {names.map(name => (
      <div className="col-md-3 col-sm-6 mb-5">
        <Card className="card">
          <div className="card-header">{name}</div>
          </Card>
        </div>
    ))}
    </div>
  );
}
}
