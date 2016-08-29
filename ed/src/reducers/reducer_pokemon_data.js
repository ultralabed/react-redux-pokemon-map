import { FETCH_POKEMON_MAP, SET_POKID, FETCH_POKEMON_INFO, SET_MAP_CENTER, SET_MAP_ZOOM, FETCH_POKEMON_MAP_ON_UPDATE } from '../actions/index'

const INIT_STATE = { pokemonData: [], pokemonId: null, pokemonInfo: [], mapCenter: {lat: 24.990795, lng: 121.499239}, mapZoom: 12 }

export default function(state = INIT_STATE, action) {
  switch ( action.type) {
    case FETCH_POKEMON_MAP:
      return { ...state, pokemonData:action.payload.data.data };
  }
  switch ( action.type) {
    case SET_POKID:
      return { ...state, pokemonId:action.payload };
  }
  switch ( action.type) {
    case FETCH_POKEMON_INFO:
      return { ...state, pokemonInfo:action.payload.data };
  }
  switch ( action.type) {
    case SET_MAP_CENTER:
      return { ...state, mapCenter:action.payload };
  }
  switch ( action.type) {
    case SET_MAP_ZOOM:
      return { ...state, mapZoom:action.payload };
  }
  return state;
}