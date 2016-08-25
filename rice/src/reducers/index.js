import { combineReducers } from 'redux';
import PokemonReducer from './reducer_pokemon';
import PokemonListReducer from './reducer_pokemon_list';

const rootReducer = combineReducers({
 pokemon:PokemonReducer,
 pokemonList: PokemonListReducer
});

export default rootReducer;
