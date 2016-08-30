import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleMapLoader, GoogleMap, Marker, OverlayView } from 'react-google-maps';
import * as _ from 'lodash';
import { setMapCenter, setMapZoom, fetchPokemonMap } from '../actions/index';
import moment from 'moment';

const STYLES = {
  mapContainer: {
    height: `100%`,
  },
  overlayView: {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 1,
  },
};

class PokemonMap extends Component {
  constructor(props) {
    super(props);
    let _map;
    this.handleDragend = this.handleDragend.bind(this);
    this.handleZoomChanged = this.handleZoomChanged.bind(this);
    this.getPixelPositionOffset = this.getPixelPositionOffset.bind(this);
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
      let icon=`src/images/${this.props.pokemonId}.png`;
      let pokemonCreateTime = moment(pokemon.created).format("mm:ss");

      return (
          <Marker
            key={`marker_${index}`}
            ref={index}
            position={pos}
            icon={icon}
          >
            <OverlayView 
              position={pos}
              key={`timer_${index}`}
              mapPaneName = {OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset = {this.getPixelPositionOffset}
            >
              <div style={STYLES.overlayView}>{pokemonCreateTime}</div>
            </OverlayView>
          </Marker>
      );
    });
  }

  getPixelPositionOffset(width, height) {
    return { x: -(width / 2), y: -(height / 2) + 10 };
  }

  handleDragend() {
    let latLngObj = {
      lat: this._googleMapComponent.getCenter().lat(),
      lng: this._googleMapComponent.getCenter().lng()
    }
    this.props.setMapCenter(latLngObj);
    if(this.props.mapCenter && this.props.pokemonId) {
      this.props.fetchPokemonMap(this.props.pokemonId, latLngObj.lat, latLngObj.lng, this.props.mapZoom);
    }
  }

  handleZoomChanged() {
    let zoomLevel = this._googleMapComponent.getZoom();
    this.props.setMapZoom(zoomLevel);
    if(this.props.mapCenter && this.props.pokemonId) {
      this.props.fetchPokemonMap(this.props.pokemonId, this.props.mapCenter.lat, this.props.mapCenter.lng, zoomLevel);
    }
  }

  render() {
    return (
      <div className="map">
        Pokemon Map
        <GoogleMapLoader
          containerElement={ <div style={{height: '100%', width: '100%'}} /> }
          googleMapElement={
            <GoogleMap
              ref={(map) => (this._googleMapComponent = map)}
              defaultZoom={this.props.mapZoom}
              defaultCenter={{ lat: this.props.mapCenter.lat, lng: this.props.mapCenter.lng }}
              onDragend={this.handleDragend}
              onZoomChanged={this.handleZoomChanged}
            >
                { this.renderMarker() }
            </GoogleMap>
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pokemonData: state.pokemonData.pokemonData, 
    pokemonId: state.pokemonData.pokemonId, 
    mapCenter: state.pokemonData.mapCenter,  
    mapZoom: state.pokemonData.mapZoom};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMapCenter, setMapZoom, fetchPokemonMap }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMap);
