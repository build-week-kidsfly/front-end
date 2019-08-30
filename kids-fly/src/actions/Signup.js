import axios from 'axios';
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './index';

export const addUser = user => dispatch => {
  console.log('addUser ', user);
  dispatch({ type: SIGNUP_START });
  return axios
    .post('https://kidsflyapi.herokuapp.com/auth/register', user)
    .then(res => {
      console.log(res);

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE, payload: err.data });
    });
};
