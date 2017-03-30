import { GET_BUS_NUMBER } from '../actions';

const initialState = {
  busNumber: 0
}

export default function busNumber(state = initialState, action) {
  switch (action.type){
    case GET_BUS_NUMBER:
      return {
        ...state,
        busNumber: action.payload
      }
    default:
      return state;
  }
}