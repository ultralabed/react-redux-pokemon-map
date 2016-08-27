import { FETCH_POKEMON_MAP, SET_POKID } from '../actions/index'

const INIT_STATE = { pokemonData: [], pokemonId: null }

export default function(state = INIT_STATE, action) {
  switch ( action.type) {
    case FETCH_POKEMON_MAP:
      return { ...state, pokemonData:action.payload.data.data };
  }
  switch ( action.type) {
    case SET_POKID:
      return { ...state, pokemonId:action.payload };
  }
  return state;
}