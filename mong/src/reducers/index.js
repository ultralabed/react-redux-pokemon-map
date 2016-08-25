import { combineReducers } from 'redux';
import selectPockmonReducers from './reducer_select_pockmon';

const rootReducer = combineReducers({
  selectPockmon: selectPockmonReducers
});

export default rootReducer;
