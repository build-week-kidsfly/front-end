import { FLIGHT_START, FLIGHT_SUCCESS, FLIGHT_FAILURE } from '../actions';

const initialState = {
  flights: [],
  gettingFlights: false,
  error: ''
};

export const getFlightReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FLIGHT_START:
      return {
        ...state,
        gettingFlights: true,
        error: ''
      };
    case FLIGHT_SUCCESS:
      console.log(state.flights);
      return {
        ...state,
        gettingFlights: false,
        error: '',
        flights: payload
      };
    case FLIGHT_FAILURE:
      return {
        ...state,
        gettingFlights: false,
        error: payload
      };
    default:
      return state;
  }
};
