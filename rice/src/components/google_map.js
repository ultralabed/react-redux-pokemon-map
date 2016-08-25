import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default (props) =>{
    return (
        <div className="col-md-12">
            <GoogleMapLoader
                containerElement = { <div className="embed-responsive embed-responsive-16by9" />}
                googleMapElement = {
                    <GoogleMap 
                        defaultZoom={10}  
                        defaultCenter={{ lat: 24.55, lng: 121.1 }} >
                        // Marker Here
                    </GoogleMap>    
                }
            />
         </div>     
    );
}