import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderAbilities() {
    return this.props.pokemonInfo.abilities.map( (data) => {
      return <h5 key={data.slot}>Ability: {data.ability.name}</h5>
    })
  }

  render() {
    if(this.props.pokemonInfo.length == 0){
      return <h5>Please select a pokemon.</h5>
    }

    return (
      <div className="row">
        <h3 className="col-xs-12">Pokemon info</h3>
        <div className="col-xs-12">
          <h4>Name: <image src={`src/images/${this.props.pokemonId}.png`}></image>{this.props.pokemonInfo.name}</h4>
          <h4>Height: {this.props.pokemonInfo.height} feet</h4>
          <h4>Weight: {this.props.pokemonInfo.weight} pound</h4>
          {this.renderAbilities()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { pokemonId: state.pokemonData.pokemonId, pokemonInfo: state.pokemonData.pokemonInfo };
}

export default connect(mapStateToProps)(PokemonInfo);
