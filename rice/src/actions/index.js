import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';

export function fetchPokemon(id){
    const center = {lat: 24.7935737496517, lng: 120.994577645321}
    const url = `https://www.pokeradar.io/api/v1/submissions?latitude=${center.lat}&longitude=${center.lng}&zoomLevel=10&pokemonId=${id}`;  
    const request = axios.get(url); 
    return{
        type: FETCH_POKEMON,
        payload: request
    };
}

export function selectPokemon (POKEMON){
   console.log('SELECTED POKEMON: ', POKEMON);
   return {
       type: 'POKEMON_SELECTED',
       payload: POKEMON
   };
}