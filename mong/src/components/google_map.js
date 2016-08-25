import React, {Component} from 'react';
import { GoogleMap, GoogleMapLoader,Marker } from "react-google-maps";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectPockmon } from '../actions/index';

class PkMap extends Component {

    constructor(props){
		super(props);
	}

  state = {
    center: {lat: 24.7935737496517, lng: 120.994577645321},
    zoom: 16,
  };

    _onChange = ({center, zoom}) => {
        this.setState({
            center: center,
            zoom: zoom,      
        });
    }

    markerList(data){
        let markerItem;

        if(data){
            console.log('list.length',data.length);
            markerItem = data.map((marker, index) => {
            
                const  markerState= {
                    position: {
                        lat: marker.latitude,
                        lng: marker.longitude,
                    },
                    key: marker.id,
                    defaultAnimation: 2,
                    label: marker.pokemonId.toString(),
                    icon: {
                        url: "../../style/icon.png"
                    }
                };

                return ( <Marker {...markerState}/> );
            })
        }

        return markerItem;
    }
    
    testList(){

        if(this.props.selectPockmon.list){
            {this.props.selectPockmon.list.map((marker, index) => {
                const pos = {lat: marker.latitude, lng: marker.longitude,}
                console.log('marker',marker);
                return (
                    <Marker key={marker.id} position={pos} label= {marker.pokemonId} />
                );
            })} 
        }
    }

    render(){

        return (
            <div>
                <GoogleMapLoader 
                    containerElement={<div style={{width: '100%',height: '500'}}/>}
                    googleMapElement={
                        <GoogleMap onChange={this._onChange} center={this.state.center} zoom={this.state.zoom}>
                        
                            { this.markerList(this.props.selectPockmon.list) }
                            
                        </GoogleMap>

                    }
                />
            </div>
        );
    }
}

function mapStatToProp(state) {
    return {
		selectPockmon: state.selectPockmon
	};
}

function mapDispatchProps(dispatch) {
	return bindActionCreators({ selectPockmon: selectPockmon}, dispatch);
}

export default connect(mapStatToProp)(PkMap);