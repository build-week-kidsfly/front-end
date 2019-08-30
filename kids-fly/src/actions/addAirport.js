import { axiosWithAuth } from '../utilities/axiosWithAuth/axiosWithAuth';
import {
  AIRPORT_ADD_START,
  AIRPORT_ADD_SUCCESS,
  AIRPORT_ADD_FAILURE
} from './index';

export const addAirport = state => dispatch => {
  console.log(state);
  dispatch({ type: AIRPORT_ADD_START });
  return axiosWithAuth()
    .post('https://kidsflyapi.herokuapp.com/admin/airports')
    .then(res => {
      console.log(res);
      dispatch({ type: AIRPORT_ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AIRPORT_ADD_FAILURE, payload: err });
    });
};
