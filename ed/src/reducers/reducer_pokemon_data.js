import { FETCH_POKEMON_MAP } from '../actions/index'

export default function(state = [], action) {
  switch ( action.type) {
    case FETCH_POKEMON_MAP:
      return [ action.payload.data];
  }
  return state;
}