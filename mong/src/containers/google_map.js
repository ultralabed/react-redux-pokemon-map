import React, {Component} from 'react';
import { GoogleMap, GoogleMapLoader, Marker, InfoWindow,OverlayView} from "react-google-maps";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { fetchMapInfo } from '../actions/index';
import  PokemonMarkerItem  from '../components/pokemon_mark_item';


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

class PkMap extends Component {

    constructor(props){
		super(props);
        this.state  = {
            center: {lat: 24.7935737496517, lng: 120.994577645321},
            zoom: 12,
        };

        this.props.fetchMapInfo({
            init: true,
            center: {lat: 24.7935737496517, lng: 120.994577645321},
            zoom: 12,
            minLatitude: 25.050360555529643,
            maxLatitude: 25.0579805152913,
            minLongitude: 121.53322935104369,
            maxLongitude: 121.55524492263794
        });


        
	}

  

    _onChange({center, zoom}){
        this.setState({
            center: center,
            zoom: zoom,      
        });

        this.props.fetchMapInfo({
            init: true,
            center:center,
            zoom: zoom,
            minLatitude: 25.050360555529643,
            maxLatitude: 25.0579805152913,
            minLongitude: 121.53322935104369,
            maxLongitude: 121.55524492263794
        });


    }

    markerList(data){
        let markerItem;

        if(data){
            console.log('===Marker number==',data.length);
           
            markerItem = data.map((marker, index) => {
                // return(<PokemonMarkerItem key ={index} {...marker} />);
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
                const ref = `marker_${index}`;
                return ( 
                    <Marker {...markerState} ref={ref}>
                        
                    </Marker> 
                );
            })
        }
        return markerItem;
    }


    renderPokemonTimer(data) {
        let markerItem;
       
        if(data){

            let now = new Date();

            console.log('===Marker number==',data.length);
           // setInterval(this.discountTimer().bind(this), 1000);
            markerItem = data.map((marker, index) => {

                let times = new Date(marker.created * 1000  + 15*60000) -now;
                let minutes = parseInt( (times)/ (1000 * 60 )) ;
                let seconds = parseInt( (times - minutes*60*1000)/ (1000) );
               
                const  timerState= {
                    position: {
                        lat: marker.latitude,
                        lng: marker.longitude,
                    },
                    key:  `timer_${index}`,
                    mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET,
                    getPixelPositionOffset: this.getPixelPositionOffset
                };
                return ( 
                    <OverlayView {...timerState} >
                        <div style={STYLES.overlayView}>{minutes}:{seconds}</div>
                    </OverlayView>
                );
            })
        }
        return markerItem;


  }

  timerDiscount(times){
      let minutes = parseInt( (times)/ (1000 * 60 )) ;
      let seconds = parseInt( (times - minutes*60*1000)/ (1000) );
      return (<div>{minutes}:{seconds}</div>);
  }

  getPixelPositionOffset(width, height) {
    return { x: -(width / 2), y: -(height / 2) };
  }

    
    render(){

        return (
            <div>
                <GoogleMapLoader 
                    containerElement={<div style={{width: '100%',height: '500'}}/>}
                    googleMapElement={
                        <GoogleMap onChange={this._onChange} center={this.state.center} zoom={this.state.zoom}>
                        
                            { this.markerList(this.props.pokemonList.list) }
                            { this.renderPokemonTimer(this.props.pokemonList.list) }
                        </GoogleMap>

                    }
                />
            </div>
        );
    }
}

function mapStatToProp({pokemonList, mapInfo}) {
    return {
		pokemonList: pokemonList,
        mapInfo: mapInfo
	};
}

function mapDispatchProps(dispatch) {
	return bindActionCreators({ fetchMapInfo: fetchMapInfo}, dispatch);
}

export default connect(mapStatToProp,mapDispatchProps)(PkMap);