import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../actions/index';
import GoogleMap from './google_map';

class PokemomMap extends Component{
    componentWillMount(){
       this.props.fetchPokemon();
    }
    render(){
        console.log('pokemon.data:',this.props.pokemon);
        return (
            <div className="col-md-12">
                <GoogleMap />
            </div>       
        );
    }
}

function mapStateToProps(state){
    return { pokemon: state.pokemon}; 
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPokemon }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemomMap);
