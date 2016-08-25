import React, {Component} from 'react';
import { GoogleMap, GoogleMapLoader,Marker } from "react-google-maps";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectPockmon } from '../actions/index';

class PkMap extends Component {

  state = {
    center: {lat: 24.796288, lng: 120.996908},
    zoom: 17,
  };

  _onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom,      
    });
  }

markerState = {
    markers: [{
      position: {
        lat: 24.796288,
        lng: 120.996908,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  }
 
    render(){
        const pos = {lat: 24.796288, lng: 120.996908}
        const markerState = {
            markers: [{
            position: {
                lat: 24.795,
                lng: 120.997,
            },
            key: '1',
            defaultAnimation: 2,
            icon: {
                url: "../../style/icon.png",
                size: {width:10,height:10}
            },
            },
            {
            position: {
                lat: 24.7958,
                lng: 120.997,
            },
            key: '2',
            defaultAnimation: 2,
            icon: {
                url: "../../style/icon.png",
                size:{width:70,height:70}
            },
            }
            ],
        }
        console.log(this.props.selectPockmon);
        console.log(markerState.markers);
        return (
            <div>
                <GoogleMapLoader 
                    containerElement={<div style={{width: '100%',height: '500'}}/>}
                    googleMapElement={
                        <GoogleMap
                        onChange={this._onChange}
                        center={this.state.center}
                        zoom={this.state.zoom}>
                        >
                        
                        {markerState.markers.map((marker, index) => {
                            return (
                                <Marker key={marker.key} position={marker.position} label= {marker.key} 
                                    icon={marker.icon}
                                />
                            );
                        })}  
                        </GoogleMap>

                    }
                />
            </div>
        );
    }
}

function mapStatToProp(state) {
    console.log(state);
    return {
		selectPockmon: state.selectPockmon
	};
}

function mapDispatchProps(dispatch) {
	return bindActionCreators({ selectPockmon: selectPockmon}, dispatch);
}

export default connect(mapStatToProp)(PkMap);