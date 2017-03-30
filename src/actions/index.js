import $ from 'jquery';

export const SHOW_STOPS = 'SHOW_STOPS';
export const GET_BUS_NUMBER = 'GET_BUS_NUMBER';
export const ERROR_RESPONSE = 'ERROR_RESPONSE';

export function showStops(number) {
  return (dispatch, getState) => {
    $.ajax({
      url: 'https://api.tfl.gov.uk/line/' + number + '/route/sequence/outbound',
      dataType: 'json',
      cache: false,
      success: function(data) {
        dispatch({
          type: SHOW_STOPS,
          payload: {
            stations: data.stations,
            error: false
          }
        })
      },
      error: function(){
        dispatch({
          type: ERROR_RESPONSE,
          payload: 'Bus number "' + number + '" not found.',
          error: true
        })
      }
    });
  }
}

export function getBusNumber(busNumber) {
  return {
    type: GET_BUS_NUMBER,
    payload: busNumber
  }
}
