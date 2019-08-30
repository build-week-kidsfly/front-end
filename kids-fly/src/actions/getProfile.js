import { PROFILE_START, PROFILE_SUCCESS, PROFILE_FAILURE } from './index';
import { axiosWithAuth } from '../utilities/axiosWithAuth/axiosWithAuth';

export const getProfile = () => dispatch => {
  dispatch({ type: PROFILE_START });
  return axiosWithAuth()
    .get('https://kidsflyapi.herokuapp.com/user')
    .then(res => {
      console.log(res);
      dispatch({ type: PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: PROFILE_FAILURE, payload: err });
    });
};
