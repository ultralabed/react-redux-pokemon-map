import { FETCH_POKEMON_MAP, SET_POKID, FETCH_POKEMON_INFO } from '../actions/index'

const INIT_STATE = { pokemonData: [], pokemonId: null, pokemonInfo: [] }

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
  return state;
}