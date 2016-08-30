import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPokemon } from '../actions/index';
import { fetchPokemon } from '../actions/index';
import { bindActionCreators } from 'redux';

class PokemonSelect extends Component{
    constructor (props){
		super(props);

		this.state = { 
			SelectedPokemon: 0,
		};
	}

    componentDidMount() {
        // Every 30s refresh markers  
        setInterval(function() {       
           console.log('refresh:',this.state.SelectedPokemon); 
           this.props.fetchPokemon(this.state.SelectedPokemon);
        }.bind(this), 30000);          
    }

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
		this.props.selectPokemon(term);
        this.props.fetchPokemon(term);
        this.setState({
                SelectedPokemon: term,
            });
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