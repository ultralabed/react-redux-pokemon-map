import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPokemon } from '../actions/index';
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

    render(){
        return(
            <div className="form-group col-md-4 pull-right" >
                <label>Select a Pokemon:</label>
                <select className="form-control" onChange = {(event)=> this.props.selectPokemon(event.target.value)}>
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
	return bindActionCreators({ selectPokemon: selectPokemon }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemonSelect);