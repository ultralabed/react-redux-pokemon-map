import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PokemonInfo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>Pokemon Info</div>
        );
    }
}

export default PokemonInfo;