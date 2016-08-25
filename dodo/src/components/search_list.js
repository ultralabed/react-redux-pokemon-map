import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPokemon} from '../actions/index';

class SearchList extends Component{
    constructor(props){
        super(props); 

        this.state = { term: '' };
        this.onInputChange= this.onInputChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state.term);
        //We need to go and fetch weather data
        //this.props.fetchWeather(this.state.term);
        this.props.fetchPokemon(this.state.term);
        this.setState({term: ''});
    }
    render(){
        
        return(
            
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

}


export default connect(null,{fetchPokemon})(SearchList);