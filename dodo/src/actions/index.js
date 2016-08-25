import axios from 'axios';

const ROOT_URL = `https://www.pokeradar.io/api/v1/submissions`;

export const FETCH_POKEMON = 'FETCH_POKEMON';

export function fetchPokemon(pokemon_id){
  const url=`${ROOT_URL}?latitude=25.053965&longitude=121.544276&zoomLevel=13&pokemonId=${pokemon_id}`;
  const request = axios.get(url);
  console.log(url);
  return{
    type: FETCH_POKEMON,
    payload: request
  };
}

export function selectPokemon(name){
  //selectBook is an ActionCreator, it needs to return an action,
  //an object with a type property
  return{
    type: 'POKEMON_SELECTED',
    payload: name
  };

}