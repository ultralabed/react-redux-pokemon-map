import axios from 'axios';

const ROOT_URL = `https://www.pokeradar.io/api/v1/submissions?`;
export const FETCH_POKEMON_MAP = 'FETCH_POKEMON_MAP';

export function fetchPokemonMap(pokId) {
  let lat = 20;
  let lng = 124;
  let zoom = 5;
  const url = `${ROOT_URL}latitude=${lat}&longitude=${lng}&zoomLevel=${zoom}&pokemonId=${pokId}`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_POKEMON_MAP,
    payload: request
  };
}