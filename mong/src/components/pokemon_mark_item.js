import React, { Component} from 'react';
import { GoogleMap, GoogleMapLoader,Marker } from "react-google-maps";

const PokemonMarkerItem = (marker) => {
	console.log("++++++++++++++++++++++++++++++++++");
    const  markerState= {
        position: {
            lat: marker.latitude,
            lng: marker.longitude,
        },
        key: marker.id,
        defaultAnimation: 2,
        label: marker.pokemonId.toString(),
        /* icon: {
            url: "../../style/icon.png"
        }*/
    };

   return ( <Marker {...markerState}/> );

};

export default PokemonMarkerItem;