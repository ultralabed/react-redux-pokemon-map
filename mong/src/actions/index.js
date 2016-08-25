import axios from 'axios';

const ROOT_URL ="https://www.pokeradar.io/api/v1/submissions?minLatitude=24.79109818120709&maxLatitude=24.79931854882014&minLongitude=120.98644495010376&maxLongitude=121.0063362121582&pokemonId=0";
//"https://www.pokeradar.io/api/v1/submissions?minLatitude=25.050360555529643&maxLatitude=25.0579805152913&minLongitude=121.53322935104369&maxLongitude=121.55524492263794&pokemonId=10";

export const FETCH_POCKMON_SELECTED = 'FETCH_POCKMON_SELECTED';

export function fetchSelectPockmon(pokemon){
    const url = `${ROOT_URL}`;
    const requset = axios.get(url);

  console.log('requset:',requset);

    return {
        type: FETCH_POCKMON_SELECTED,
        payload: requset
    };
    
}