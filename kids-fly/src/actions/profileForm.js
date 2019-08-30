import {
    PROFILE_ADD_START,
    PROFILE_ADD_SUCCESS,
    PROFILE_ADD_FAILURE
} from './index';
import {
    axiosWithAuth
} from '../utilities/axiosWithAuth/axiosWithAuth';

export const addPerson = person => dispatch => {
    console.log(person);
    dispatch({
        type: PROFILE_ADD_START
    });
    return axiosWithAuth()
        .put('https://kidsflyapi.herokuapp.com/user', person)
        .then(res => {
            console.log(res);
            dispatch({
                type: PROFILE_ADD_SUCCESS,
                payload: res.data.token
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: PROFILE_ADD_FAILURE,
                payload: err.data
            });
        });
};
