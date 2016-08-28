import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemonMap, setPokId, fetchPokemonInfo } from '../actions/index';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.selectedIndex = this.selectedIndex.bind(this);
  }

  selectedIndex(event) {
    this.props.fetchPokemonMap(event.target.value);
    this.props.fetchPokemonInfo(event.target.value);
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
          <option value="25">皮卡丘</option>
          <option value="129">鯉魚王</option>
          <option value="143">卡比獸</option>
        </select>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPokemonMap, setPokId, fetchPokemonInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(PokemonList);
