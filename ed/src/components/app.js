import React, { Component } from 'react';
import PokemonList from '../containers/pokemon_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <PokemonList />
      </div>
    );
  }
}
