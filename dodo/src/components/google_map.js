import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
export default (props)=>{

  return (
    <section style={{ height: `100%` }}>
        <GoogleMapLoader 
        containerElement={<div style={{ height: `100%` }} />}
        googleMapElement={
            <GoogleMap defaultZoom={18} defaultCenter={{lat: props.lat, lng: props.lon}} >
                  {props.markers.map((marker, index) => (
                        <Marker
                        key={marker.key}
                        {...marker}
                        />
                    ))}
            </GoogleMap>
        }
        />
    </section>
  );
} 