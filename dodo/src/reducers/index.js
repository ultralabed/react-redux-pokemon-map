import { combineReducers } from 'redux';
import SearchPokemonReducer from './reducers_search_pokemons';
import InfoPokemonReducer from './reducers_info_pokemon';
import ActivePokemon from './reducers_active_pokemon';
const rootReducer = combineReducers({
  searchPokemon:SearchPokemonReducer,
  infoPokemon:InfoPokemonReducer,
  activePokemon:ActivePokemon
});

export default rootReducer;
