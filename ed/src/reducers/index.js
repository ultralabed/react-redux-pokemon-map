import { combineReducers } from 'redux';
import PokemonDataReducer from './reducer_pokemon_data';

const rootReducer = combineReducers({
    pokemonData: PokemonDataReducer
});

export default rootReducer;
