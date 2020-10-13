import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

const Card = styled.div`
box-shadow: 1px 3px 3px black;
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover {
   box-shadow: 0 14px 28px rgba(240, 231, 17, 0.79), 0 5px 5px rgba(240, 231, 17, 0.79);
 }
;`


export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokeIndex: '',
    imageLoading: true,
    requestError: false,
  };

  componentDidMount() {
    const name = this.props.name;
    const url = this.props.url;
    const pokeIndex = url.split('/')[6];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokeIndex,
    })
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Card className="card">
          <strong className="card-header">{this.state.pokeIndex}</strong>
          <Sprite
          className="card-img mt-2 mx-auto"
          src={this.state.imageUrl}
          onLoad={() => this.setState({imageLoading: false})}
          onError={() => this.setState({requestError: true})}
          />
            <div className='card-body mx-auto'>
              <h7 className='card-title'>{this.state.name
                .toLowerCase()
                .split(' ')
                .map(letter =>
                  letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h7>
            </div>
          </Card>
        </div>

    );
  }
}
