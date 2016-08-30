import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class PokemonMap extends Component {
    constructor(props){
        super(props);
    }

    renderPokemonMarker(pokemon){
        return this.props.pokemons.map((pokemon, index) => {
            const ref = `marker_${index}`;
            const icon = `/images/pokemon/${pokemon.pokemonId}.png`
            
            return (
                <Marker
                    key={index} 
                    ref={ref}
                    position={{lat:pokemon.latitude, lng:pokemon.longitude}}
                    icon={{url:icon, scaledSize:{width:30,height:30}}} 
                />
                
            );
        });
    }

    render(){
        return(
            <div className="map">
            Pokemon Map
            <GoogleMapLoader
                containerElement={ <div style={{height: '100%', width: '100%'}} /> }
                googleMapElement={
                    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 25.064676, lng: 121.544358 }}>
                        {this.renderPokemonMarker()}
                    </GoogleMap>
                }
            />           
            </div>          
        );
    }
}


function mapStateToProps(state){
    return { pokemons: state.pokemon.pokemons };
}
export default connect(mapStateToProps)(PokemonMap);