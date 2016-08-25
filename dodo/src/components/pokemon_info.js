import React, {Component} from 'react';
import {connect} from 'react-redux';

class PokemonInfo extends Component{
   render(){console.log(this.props.pokemon);
     
      if(!this.props.pokemon){
           return <div>Select a pokemon</div>;
      }

      return(
           <div>
            <h3>Info:</h3>
            <div>{this.props.pokemon}</div>
           </div>
      );
    
   }

}

function mapStateToProps(state){
  return {
    pokemon: state.activePokemon
  };
}

export default connect(mapStateToProps,null)(PokemonInfo);