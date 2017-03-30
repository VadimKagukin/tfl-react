import { combineReducers } from 'redux';

import busNumber from './busNumber';
import stops from './stops';

export default combineReducers({
  busNumber,
  stops
})