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

    // const abilities = pokemonResponse.data.abilities.map(ability => {
    //   return ability.ability.name
    //   .charAt(0)
    //   .toUpperCase()
    //   + ability.ability.name
    //   .slice(1)
    // })

    const abilities = pokemonResponse.data.abilities
    .map(ability => {
    return ability.ability.name
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  })
  .join(', ');

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
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col md-3">
              <img src={this.state.imageUrl} className="ard-img mt-2 mx-auto"/>
          </div>
          <div className="col-md-9">
          <h5 className="mx-auto">
          {this.state.name.charAt(0)
                .toUpperCase()
                + this.state.name
                .slice(1)}
        </h5>
        <div className="row align-items-center">
          <div className="col-12 col-md-3">HP</div>
          <div className="col-12 col-md-9">
          <div className="progress">
          <div className="progress-bar" role="progressBar" style={{
            width: `${this.state.stats.hp}%`
          }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100">
          <small>{this.state.stats.hp}</small>
          </div>
          </div>
          </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-md-3">Attack</div>
            <div className="col-12 col-md-9">
            <div className="progress">
            <div className="progress-bar" role="progressBar" style={{
              width: `${this.state.stats.attack}%`
            }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100">
            <small>{this.state.stats.attack}</small>
            </div>
            </div>
            </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-3">Defense</div>
              <div className="col-12 col-md-9">
              <div className="progress">
              <div className="progress-bar" role="progressBar" style={{
                width: `${this.state.stats.defense}%`
              }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100">
              <small>{this.state.stats.defense}</small>
              </div>
              </div>
              </div>
              </div>
              <div className="row align-items-center">
                <div className="col-12 col-md-3">Speed</div>
                <div className="col-12 col-md-9">
                <div className="progress">
                <div className="progress-bar" role="progressBar" style={{
                  width: `${this.state.stats.speed}%`
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100">
                <small>{this.state.stats.speed}</small>
                </div>
                </div>
                </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3">Special Attack</div>
                  <div className="col-12 col-md-9">
                  <div className="progress">
                  <div className="progress-bar" role="progressBar" style={{
                    width: `${this.state.stats.specialAttack}%`
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100">
                  <small>{this.state.stats.specialAttack}</small>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Special Defense</div>
                    <div className="col-12 col-md-9">
                    <div className="progress">
                    <div className="progress-bar" role="progressBar" style={{
                      width: `${this.state.stats.specialDefense}%`
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    <small>{this.state.stats.specialDefense}</small>
                    </div>
                    </div>
                    </div>
                    </div>
                  <div className="row mt-3">
                  <div className="col">
                  <i>{this.state.description}</i>
                  <p className="mt-3">Abilities: {this.state.abilities}</p>
                  </div>
                  </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  </div>

  );
}
}
