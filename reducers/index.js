import {combineReducers} from 'redux';
import PositionSet from './reducer-allskills';
import DropDownReducer from './reducer-dropdown';
import Selected from './reducer-selected';
import Hired from './reducer-hired';

const allReducers = combineReducers({
  skills : PositionSet,
  disable : DropDownReducer,
  selected : Selected,
  hired : Hired
});

export default allReducers;
