import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PokemonMap extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>Pokemon Map</div>
        );
    }
}

export default PokemonMap;