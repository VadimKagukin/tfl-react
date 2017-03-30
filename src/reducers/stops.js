import { SHOW_STOPS, ERROR_RESPONSE } from '../actions';

const initialState = {
  stations: [],
  error: false,
  errorMessage: ''
}

export default function stops(state = initialState, action){
  switch (action.type){
    case SHOW_STOPS:
      return {
        ...state,
        stations: action.payload.stations,
        error: action.payload.error
      }
    case ERROR_RESPONSE:
      return {
        ...state,
        error: action.error,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}