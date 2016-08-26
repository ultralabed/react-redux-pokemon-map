import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Pokemon info
      </div>
    )
  }
}

function mapStateToProps({ pokemonData }) {
  return { pokemonData };
}

export default connect(mapStateToProps)(PokemonInfo);
