import React, { Component } from 'react';
import axios from 'axios';

const Colours = {
  bug: '#B1C12E',
  dark: '#4F3A2D',
  dragon: '#755EDF',
  electric: '#FCBC17',
  fairy: '#F4B1F4',
  fighting: '#823551D',
  fire: '#E73B0C',
  flying: '#A3B3F7',
  ghost: '#6060B2',
  grass: '#74C236',
  ground: '#D3B357',
  ice: '#A3E7FD',
  normal: '#C8C4BC',
  poison: '#934594',
  psychic: '#ED4882',
  rock: '#B9A156',
  steel: '#B5B5C3',
  water: '#3295F6'
};

export default class PokemonMain extends Component {

  state = {
    name: '',
    pokeIndex: '',
    imageUrl: '',
    abilities: '',
    types: [],
    description: '',
    statTitleWidth: 3,
    statBarWidth: 9,
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: ''
    },
  };

  async componentDidMount() {
    const { pokeIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeIndex}/`;

    const pokemonResponse = await axios.get(pokemonUrl);

    const name = pokemonResponse.data.name.charAt(0).toUpperCase()+ pokemonResponse.data.name.slice(1);

    const imageUrl = pokemonResponse.data.sprites.front_default

    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

    pokemonResponse.data.stats.map(stat => {
      switch(stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
      }
    });

    const types = pokemonResponse.data.types.map(type => type.type.name);

    const abilities = pokemonResponse.data.abilities.map(ability => {
      return ability.ability.name
      .charAt(0)
      .toUpperCase()
      + ability.ability.name
      .slice(1)
    })

    const pokemonSpeciesResponse = await axios.get(pokemonSpeciesUrl);
    let description = '';
    pokemonSpeciesResponse.data.flavor_text_entries.some(entry => {
      if (entry.language.name === 'en') {
        description = entry.flavor_text;
      }
    });

    this.setState({
      description,
    })

    this.setState({
      name,
      imageUrl,
      pokeIndex,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense,
      },
      abilities,
    })
  }

render() {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-5">
            <strong>{this.state.pokeIndex}</strong>
            </div>
              <div className="col-7">
                <div className="float-right">
                  {this.state.types.map(type =>(
                    <span key={type} className="badge badge-primary badge-pill mr-1"
                    style={{backgroundColor: `${Colours[type]}`}}>

                    {type.charAt(0)
                          .toUpperCase()
                          + type
                          .slice(1)}
                    </span>
                  )
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
}
