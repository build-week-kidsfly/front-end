import {
  AIRPORT_ADD_START,
  AIRPORT_ADD_SUCCESS,
  AIRPORT_ADD_FAILURE
} from '../actions';

const initialState = {
  airports: [],
  gettingAirports: false,
  error: ''
};

export const addAirportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AIRPORT_ADD_START:
      return {
        ...state,
        gettingAirports: true,
        error: ''
      };
    case AIRPORT_ADD_SUCCESS:
      return {
        ...state,
        gettingAirports: false,
        error: '',
        airports: payload
      };
    case AIRPORT_ADD_FAILURE:
      return {
        ...state,
        gettingAirports: false,
        error: payload
      };
    default:
      return state;
  }
};
