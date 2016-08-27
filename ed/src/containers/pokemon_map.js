import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class PokemonMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="map">
            Pokemon Map
            <GoogleMapLoader
                containerElement={ <div style={{height: '100%', width: '100%'}} /> }
                googleMapElement={
                    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 25.064676, lng: 121.544358 }}>
                    </GoogleMap>
                }
            />           
            </div>     
    );
  }
}

function mapStateToProps({ pokemonData }) {
  return { pokemonData };
}

export default connect(mapStateToProps)(PokemonMap);
