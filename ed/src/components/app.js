import React, { Component } from 'react';
import PokemonList from '../containers/pokemon_list';
import PokemonInfo from '../containers/pokemon_info';

export default class App extends Component {
  render() {
    return (
      <div>
        <PokemonList />
        <PokemonInfo />
      </div>
    );
  }
}
