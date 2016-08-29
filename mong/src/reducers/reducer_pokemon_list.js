import { FETCH_POCKMON_LIST } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POCKMON_LIST:
            //return state.concat([action.payload.data]);
            //console.log(action.payload.data.data);
            return { ...state, list: action.payload.data.data};
    }


    return state;
}