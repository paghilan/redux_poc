import {combineReducers} from 'redux';
import SkillReducer from './reducer-allskills';
import DropDownReducer from './reducer-dropdown'

const allReducers = combineReducers({
  skills : SkillReducer,
  disable : DropDownReducer
});

export default allReducers;
