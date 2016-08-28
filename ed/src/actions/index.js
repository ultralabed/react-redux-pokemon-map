import axios from 'axios';

const POKERADAR_URL = `https://www.pokeradar.io/api/v1/submissions?`;
const POKEAPI_URL = `http://pokeapi.co/api/v2/pokemon/`;
export const FETCH_POKEMON_MAP = 'FETCH_POKEMON_MAP';
export const SET_POKID = 'SET_POKID';
export const FETCH_POKEMON_INFO = 'FETCH_POKEMON_INFO';

export function fetchPokemonMap(pokId) {
  let lat = 24.990795;
  let lng = 121.499239;
  let zoom = 5;
  const url = `${POKERADAR_URL}latitude=${lat}&longitude=${lng}&zoomLevel=${zoom}&pokemonId=${pokId}`;
  const request = axios.get(url);
  return {
    type: FETCH_POKEMON_MAP,
    payload: request
  };
}

export function setPokId(pokId) {
  return {
    type: SET_POKID,
    payload: pokId
  };
}

export function fetchPokemonInfo(pokId) {
  const url = `${POKEAPI_URL}${pokId}/`;
  const request = axios.get(url);
  return {
    type: FETCH_POKEMON_INFO,
    payload: request
  };
}