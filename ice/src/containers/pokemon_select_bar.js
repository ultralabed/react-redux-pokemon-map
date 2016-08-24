import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemonsList, fetchPokemonsLocation, fetchPokemonInfo } from '../actions/index';

class PokemonSelectBar extends Component {
    constructor(props){
        super(props);

        this.state = { id: 0 };
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    componentWillMount(){
        this.props.fetchPokemonsList();
        //this.props.fetchPokemonsLocation(20,124,5,this.state.id);
    }

    renderPokemonsList(){
        return this.props.pokemonsList.map((pokemon) => {
            return (
                <option value={pokemon.id} key={pokemon.id}>{pokemon.title}</option>
            );
        });
    }

    onSelectChange(event){
        var pokemonId = event.target.value;

        //console.log(pokemonId);
        
        this.setState({ id: pokemonId });
        this.props.fetchPokemonsLocation(25.064676, 121.544358, 12, pokemonId);
        this.props.fetchPokemonInfo(pokemonId);
    }

    render(){
        return(
            <select value={this.state.id} onChange={this.onSelectChange}>
                {this.renderPokemonsList()}
            </select>
        );
    }
}

function mapStateToProps(state){
    return { pokemonsList: state.pokemon.list };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPokemonsList, fetchPokemonsLocation, fetchPokemonInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelectBar);

//export default connect(mapStateToProps, { fetchPokemonsList, fetchPokemonsLocation, fetchPokemonInfo })(PokemonSelectBar);

