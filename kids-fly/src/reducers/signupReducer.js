import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';

const initialState = {
  users: [],
  signingUp: false,
  error: ''
};

export const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_START:
      return {
        ...state,
        signingUp: true,
        error: ''
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        error: '',
        users: payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: payload
      };
    default:
      return state;
  }
};
