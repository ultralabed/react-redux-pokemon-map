import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPokemon } from '../actions/index';
import { fetchPokemon } from '../actions/index';
import { bindActionCreators } from 'redux';

class PokemonSelect extends Component{
    renderPokemonList(){
		return this.props.pokemonList.map((pokemon)=>{
			return (
			   <option 
                    value={pokemon.id} 
                    key={pokemon.id} >
                    {pokemon.id}. {pokemon.name}
               </option>
			);
		});
	}
    onSelectChange(term) {
		this.setState({term});
		this.props.selectPokemon(term);
        this.props.fetchPokemon(term);
	}
    render(){
        return(
            <div className="form-group col-md-4 pull-right" >
                <label>Select a Pokemon:</label>
                <select className="form-control" onChange = {(event)=> this.onSelectChange(event.target.value)}>
                    {this.renderPokemonList()}
                </select>
            </div>
        );
    }
}
function mapStateToProps(state) {
	return{
		pokemonList: state.pokemonList
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectPokemon,fetchPokemon }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemonSelect);