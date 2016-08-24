import { FETCH_POKEMON_INFO, FETCH_POKEMONS_LOCATION, FETCH_POKEMONS_LIST } from '../actions/index';

const INITIAL_STATE = { list: [], pokemons: [], info: null };

export default function(state = INITIAL_STATE, action ){
    switch(action.type){  
    case FETCH_POKEMON_INFO:
    console.log(action.payload);
        return { ...state, info:action.payload };
    case FETCH_POKEMONS_LOCATION:
        console.log(action.payload.data);
        return state;
    case FETCH_POKEMONS_LIST:
        return { ...state, list:action.payload };

    default:
        return state;
    }
}