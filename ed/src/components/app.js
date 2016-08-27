import React, { Component } from 'react';
import PokemonList from '../containers/pokemon_list';
import PokemonInfo from '../containers/pokemon_info';
import PokemonMap from '../containers/pokemon_map';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <PokemonList />
          <PokemonInfo />
        </div>
        <div className="col-sm-9">
          <PokemonMap />
        </div>
      </div>
    );
  }
}
