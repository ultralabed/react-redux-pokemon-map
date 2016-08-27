import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import * as _ from 'lodash';

class PokemonMap extends Component {
  constructor(props) {
    super(props);
  }

  renderMarker() {
    if(!this.props.pokemonData) {
      return null;
    }
    let pokeRadarPrediction = _.remove(this.props.pokemonData, function(d) {
      return d.trainerName == '(Poke Radar Prediction)';
    });
    return pokeRadarPrediction.map((pokemon, index) => {
        let pos ={lat:pokemon.latitude ,lng:pokemon.longitude};
        return (
            <Marker
              key={index} 
              ref={index}
              position={pos}
          />
        );
    });
  }

  render() {
    return (
            <div className="map">
            Pokemon Map
            <GoogleMapLoader
                containerElement={ <div style={{height: '100%', width: '100%'}} /> }
                googleMapElement={
                    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 25.064676, lng: 121.544358 }}>
                       { this.renderMarker() }
                    </GoogleMap>
                }
            />           
            </div>     
    );
  }
}

function mapStateToProps(state) {
  return { pokemonData: state.pokemonData.pokemonData};
}

export default connect(mapStateToProps)(PokemonMap);
