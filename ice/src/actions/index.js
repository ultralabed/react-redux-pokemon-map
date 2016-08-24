import axios from 'axios';

export const FETCH_POKEMON_INFO = 'FETCH_POKEMON_INFO';
export const FETCH_POKEMONS_LOCATION = 'FETCH_POKEMONS_LOCATION';
export const FETCH_POKEMONS_LIST = 'FETCH_POKEMONS_LIST';

const GET_LOCATION = 'https://www.pokeradar.io/api/v1/submissions';

export function fetchPokemonInfo(id){
    var pokemonsList = [
        { title: 'all', id: 0 },
        { title: 'pokemon1', id: 1 },
        { title: 'pokemon2', id: 2 },
        { title: 'pokemon3', id: 3 }
    ];
    
    return {
        type: FETCH_POKEMON_INFO,
        payload: pokemonsList[id]
    };
}

export function fetchPokemonsLocation(latitude,longitude,level,id){
    const url = `${ GET_LOCATION }?latitude=${latitude}&longitude=${longitude}&zoomLevel=${level}&pokemonId=${id}`;
    //console.log(url);

    const request = axios.get(url);

    return {
        type: FETCH_POKEMONS_LOCATION,
        payload: request
    };
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
