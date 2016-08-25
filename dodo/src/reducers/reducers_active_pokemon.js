export default function(state = null, action){
  switch(action.type){
    case 'POKEMON_SELECTED':
      return action.payload;
  }
  return state;
}