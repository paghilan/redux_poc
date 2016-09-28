import {combineReducers} from 'redux';
import PositionSet from './reducer-allskills';
import DropDownReducer from './reducer-dropdown';
import Selected from './reducer-selected';

const allReducers = combineReducers({
  skills : PositionSet,
  disable : DropDownReducer,
  selected : Selected
});

export default allReducers;
