import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPokemon, selectPokemon} from '../actions/index';

class SearchList extends Component{
    constructor(props){
        super(props); 

        this.state = { term: '' };
        this.onInputChange= this.onInputChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);
        
    }
    componentWillMount(){
        var pokemonInfo=[];
        this.props.infoPokemon.map((pokemon)=>{
            pokemonInfo[pokemon["title"]]=pokemon["no."];
        });


    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        const pokemonInfo=[];
        this.props.infoPokemon.map((pokemon)=>{
            pokemonInfo[pokemon["name"]]=pokemon["no."];
        });
        //We need to go and fetch weather data
        //this.props.fetchWeather(this.state.term);
        this.props.selectPokemon(this.state.term);
        this.props.fetchPokemon(pokemonInfo[this.state.term]);
        //this.setState({term: ''});
    }
    render(){
        return(
            <div>
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
            </div>
        );
    }

}

function mapStateToProps(state){
  return {
    infoPokemon: state.infoPokemon
  };
}


export default connect(mapStateToProps,{fetchPokemon,selectPokemon})(SearchList);