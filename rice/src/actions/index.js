import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';

export function fetchPokemon(id){
    const url = `https://www.pokeradar.io/api/v1/submissions?latitude=23&longitude=121&zoomLevel=5&pokemonId=${id}`;
    const request = axios.get(url); 
    return{
        type: FETCH_POKEMON,
        payload: request
    };
}

export function selectPokemon (POKEMON){
   console.log('select POKEMON: ', POKEMON);
   return {
       type: 'POKEMON_SELECTED',
       payload: POKEMON
   };
}