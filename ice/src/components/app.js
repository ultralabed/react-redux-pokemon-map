import React, { Component } from 'react';

import PokemonSelectBar from '../containers/pokemon_select_bar';
import PokemonInfo from '../containers/pokemon_info';
import PokemonMap from '../containers/pokemon_map';

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <div>
          <PokemonSelectBar />
          <PokemonInfo />
          <PokemonMap />
        </div>
      </div>      
    );
  }
}
