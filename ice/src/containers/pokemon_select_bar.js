import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemonsList, fetchPokemonsLocation } from '../actions/index';


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
        console.log(event.target.value);

        this.setState({ id: event.target.value });
        this.props.fetchPokemonsLocation(25.064676, 121.544358, 12, event.target.value);
        
    }

    render(){
        return(
            <select  onChange={this.onSelectChange}>
                {this.renderPokemonsList()}
            </select>
        );
    }
}

function mapStateToProps(state){
    return { pokemonsList: state.pokemon.list };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPokemonsList: fetchPokemonsList, fetchPokemonsLocation: fetchPokemonsLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelectBar);

