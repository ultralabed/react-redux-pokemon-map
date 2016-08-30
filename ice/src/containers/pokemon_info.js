import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PokemonInfo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { pokemonInfo } = this.props;
        if (!pokemonInfo) {
            return <div>Please Select Pokemon...</div>;
        }

        return(
            <div>
                <h3>Pokemon Info:</h3>
                <div>Title: {pokemonInfo.name}</div>
                <div>Type: {pokemonInfo.type}</div>
                <div>Attack: {pokemonInfo.attack}</div>
                <div>Defense: {pokemonInfo.defense}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { pokemonInfo: state.pokemon.info };
}

export default connect(mapStateToProps)(PokemonInfo);