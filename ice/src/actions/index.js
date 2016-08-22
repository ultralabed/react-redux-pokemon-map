import axios from 'axios';

export const FETCH_POKEMON_INFO = 'FETCH_POKEMON_INFO';
export const FETCH_POKEMONS_LOCATION = 'FETCH_POKEMONS_LOCATION';
export const FETCH_POKEMONS_LIST = 'FETCH_POKEMONS_LIST';

const GET_LOCATION = '';

export function fetchPokemonInfo(){


}

export function fetchPokemonsLocation(){


}

export function fetchPokemonsList(){
    var pokemonsList = [
        { title: 'all', id: 0 },
        { title: 'pokemon1', id: 1 },
        { title: 'pokemon2', id: 2 },
        { title: 'pokemon3', id: 3 }
    ];

    return {
        type: FETCH_POKEMONS_LIST,
        payload: pokemonsList
    };
}
