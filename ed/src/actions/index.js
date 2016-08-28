import axios from 'axios';

const POKERADAR_URL = `https://www.pokeradar.io/api/v1/submissions?`;
const POKEAPI_URL = `http://pokeapi.co/api/v2/pokemon/`;
export const FETCH_POKEMON_MAP = 'FETCH_POKEMON_MAP';
export const SET_POKID = 'SET_POKID';
export const FETCH_POKEMON_INFO = 'FETCH_POKEMON_INFO';
export const SET_MAP_CENTER = 'SET_MAP_CENTER';
export const SET_MAP_ZOOM = 'SET_MAP_ZOOM';
export const FETCH_POKEMON_MAP_ON_UPDATE = 'FETCH_POKEMON_MAP_ON_UPDATE';

export function fetchPokemonMap(pokId) {
  let lat = 24.990795;
  let lng = 121.499239;
  let zoom = 12;
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

export function setMapCenter(latLngObj) {
  return {
    type: SET_MAP_CENTER,
    payload: latLngObj
  };
}

export function setMapZoom(zoomLevel) {
  return {
    type: SET_MAP_ZOOM,
    payload: zoomLevel
  };
}

export function fetchPokemonMapOnUpdate(pokId, lat, lng, zoom) {
  const url = `${POKERADAR_URL}latitude=${lat}&longitude=${lng}&zoomLevel=${zoom}&pokemonId=${pokId}`;
  const request = axios.get(url);
  return {
    type: FETCH_POKEMON_MAP_ON_UPDATE,
    payload: request
  };
}