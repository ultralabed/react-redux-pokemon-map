import React, {Component} from 'react';
import SearchList from './search_list'
import PokemonInfo from './pokemon_info'
import GoogleMap from './google_map';
import {connect} from 'react-redux';
class PokemonIndex extends Component{

    transGoogleMark(mark){
        const tran_mark={
            position: {
            lat: mark.latitude,
            lng: mark.longitude,
            },
            defaultAnimation: 2,
            key: mark.id, // Add a key property for: http://fb.me/react-warning-keys
        };
        return tran_mark;
    }

    render(){
        const {pokemons} = this.props;
        const marks = []; 
        if(pokemons.pokemon_marks){
           
            pokemons.pokemon_marks.data.map((mark)=>{
                const obj = this.transGoogleMark(mark);
                marks.push(obj);      
            });
        }
        return(
        <div style={{ height: "100%" }}>
            <div className="col-md-3">
                <SearchList />
                <PokemonInfo />
            </div>
            <div style={{ height: "100%" }}>
                <GoogleMap className="col-md-8" lon={121.544276} lat={25.053965}  markers={marks}/>
            </div>
        </div>
        );    
    }
}

function mapStateToProps(state){
  return {pokemons : state.searchPokemon}
}

export default connect(mapStateToProps,null)(PokemonIndex);