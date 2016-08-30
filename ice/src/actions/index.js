import axios from 'axios';
import { pokemons } from '../data/pokemons';

export const FETCH_POKEMON_INFO = 'FETCH_POKEMON_INFO';
export const FETCH_POKEMONS_LOCATION = 'FETCH_POKEMONS_LOCATION';
export const FETCH_POKEMONS_LIST = 'FETCH_POKEMONS_LIST';

const GET_LOCATION = 'https://www.pokeradar.io/api/v1/submissions';

const GET_POKEMONS_LIST = 'https://raw.githubusercontent.com/flyswatter/poke-scanner/master/pokedex.json';


export function fetchPokemonInfo(id){
    
    return {
        type: FETCH_POKEMON_INFO,
        payload: pokemons[id]
    };
}

export function fetchPokemonsLocation(latitude, longitude, level, id){

    const url = `${ GET_LOCATION }?latitude=${latitude}&longitude=${longitude}&zoomLevel=${level}&pokemonId=${id}`;
    //console.log(url);
    const request = axios.get(url);

    return {
        type: FETCH_POKEMONS_LOCATION,
        payload: request
    };
}

export function fetchPokemonsList(){

    return {
        type: FETCH_POKEMONS_LIST,
        payload: pokemons
    };
}
