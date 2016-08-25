import { FETCH_POKEMON } from '../actions/index';
const INITIAL_STATE = {  pokemon: [] };

export default function (state = INITIAL_STATE , action){
    switch (action.type) {
        case FETCH_POKEMON:
         return [...state, action.payload.data.data ];
    }
    return state;
}