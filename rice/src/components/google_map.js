import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import { connect } from 'react-redux';

class GoogleMapWithPokemons extends Component{
    
    renderMarkers(){
        if (!this.props.pokemon)
        {
            return '';
        }
		return this.props.pokemon.pokemon.data.map((pokemon)=>{
			return (
                <Marker  
                    key={pokemon.id} 
                    position={{lat:pokemon.latitude, lng:pokemon.longitude}}
                    defaultAnimation={1}         
                />
			);
		});
    }
    
    render(){
      return (
            <div>
                <GoogleMapLoader
                    containerElement = { <div className="embed-responsive embed-responsive-16by9" />}
                    googleMapElement = {
                        <GoogleMap 
                            defaultZoom={9}  
                            defaultCenter={{ lat: 24.9555, lng: 121.5 }} >
                            {this.renderMarkers()}
                        </GoogleMap>    
                    }
                />
            </div>     
        );
    }   
}

function mapStateToProps(state){
    return { pokemon: state.pokemon}; 
}

export default connect(mapStateToProps)(GoogleMapWithPokemons);
