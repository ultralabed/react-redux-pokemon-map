import React, {Component} from 'react';
import SearchList from '../containers/search_list'
import GoogleMap from './google_map';
class PokemonIndex extends Component{
    render(){
        return(
            <div style={{ height: "100%" }}>
                <SearchList />
                <GoogleMap lon={121.544276} lat={25.053965} />
            </div>
        );
    }
}

export default PokemonIndex;