import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemonMap, setPokId } from '../actions/index'; 

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.selectedIndex = this.selectedIndex.bind(this);
  }

  selectedIndex(event) {
    this.props.fetchPokemonMap(event.target.value);
    this.props.setPokId(event.target.value);
  }

  render() {
    return (
      <div>
        <select onChange={ this.selectedIndex }>
          <option value="0">none</option>
          <option value="1">妙蛙種子</option>
          <option value="2">妙蛙草</option>
          <option value="3">妙蛙花</option>
        </select>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPokemonMap, setPokId }, dispatch);
}

export default connect(null, mapDispatchToProps)(PokemonList);
