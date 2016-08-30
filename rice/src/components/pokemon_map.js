import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMapWithPokemons from './google_map';
import { fetchPokemon } from '../actions/index';


class PokemomMap extends Component{
    componentWillMount(){
        this.props.fetchPokemon('0');

    }
    renderPokemonInfo(){
        if (!this.props.pokemon)
        {
            return ""
        }
		// return this.props.pokemon.pokemon.data.map((pokemon)=>{
		// 	return (
        //         <li key={pokemon.id} className="list-group-item">
        //                 User:{pokemon.trainerName}<br/>
        //                 in ({pokemon.latitude},{pokemon.longitude})          
        //         </li>
		// 	);
		// });
        //console.log(this.props.pokemon.pokemon.data)
	}
    render(){
        return (
            <div className="col-md-12">
                <div>
                    <ul className="list-group">
                        {this.renderPokemonInfo()}
                    </ul>
                </div>
                <GoogleMapWithPokemons/>
            </div>       
        );
    }
}

function mapStateToProps(state){
    return { pokemon: state.pokemon}; 
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPokemon }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PokemomMap);
