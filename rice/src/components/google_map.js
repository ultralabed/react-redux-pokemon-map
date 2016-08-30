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
            const url=`../../image/pokemon/${pokemon.pokemonId}.jpg`;
            const image = {
                    url:url,
                    scaledSize:{width:60,height:60}
            };        
			return (
                <Marker  
                    key={pokemon.id} 
                    position={{lat:pokemon.latitude, lng:pokemon.longitude}}
                    defaultAnimation={0}
                    icon={image}                            
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
                            defaultZoom={15}  
                            defaultCenter={{lat: 24.7935737496517, lng: 120.994577645321}} >
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
