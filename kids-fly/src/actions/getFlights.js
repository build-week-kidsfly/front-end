import { FLIGHT_START, FLIGHT_SUCCESS, FLIGHT_FAILURE } from './index';
import { axiosWithAuth } from '../utilities/axiosWithAuth/axiosWithAuth';

export const getFlights = () => dispatch => {
  dispatch({ type: FLIGHT_START });
  return axiosWithAuth()
    .get('https://kidsflyapi.herokuapp.com/user/flights')
    .then(res => {
      console.log(res);
      dispatch({ type: FLIGHT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FLIGHT_FAILURE, payload: err.data });
    });
};
