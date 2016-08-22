import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemonsList } from '../actions/index';


class PokemonSelectBar extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
       this.props.fetchPokemonsList();
    }

    renderPokemonsList(){
        return this.props.pokemonsList.map((pokemon) => {
            return (
                <option value={pokemon.id} key={pokemon.id}>{pokemon.title}</option>
            );
        });
    }

    render(){
        return(
            <select>
                {this.renderPokemonsList()}
            </select>
        );
    }
}

function mapStateToProps(state){
    return { pokemonsList: state.pokemon.list };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPokemonsList: fetchPokemonsList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelectBar);

