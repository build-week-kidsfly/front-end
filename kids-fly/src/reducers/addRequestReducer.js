import {
  REQUEST_ADD_START,
  REQUEST_ADD_SUCCESS,
  REQUEST_ADD_FAILURE
} from '../actions';

const initialState = {
  isAdding: false,
  userRequest: [],
  error: ''
};

export const addRequestReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_ADD_START:
      return {
        ...state,
        isAdding: true,
        error: ''
      };
    case REQUEST_ADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
        error: '',
        userRequest: payload
      };
    case REQUEST_ADD_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: payload
      };
    default:
      return state;
  }
};
