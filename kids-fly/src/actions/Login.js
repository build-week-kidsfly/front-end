import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from './index';
import { axiosWithAuth } from '../utilities/axiosWithAuth/axiosWithAuth';

export const login = user => dispatch => {
  console.log("user", user );
  console.log(user);
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('https://kidsflyapi.herokuapp.com/auth/login', user)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};
