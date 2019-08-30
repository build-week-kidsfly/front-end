import {
  PROFILE_ADD_START,
  PROFILE_ADD_SUCCESS,
  PROFILE_ADD_FAILURE
} from '../actions';

const initialState = {
  users: [],
  isAdding: false,
  error: '',
  loggedIn: ''
};

export const profileFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_ADD_START:
      return {
        ...state,
        isAdding: true,
        error: '',
        loggedIn: false
      };

    case PROFILE_ADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
        error: '',
        users: payload,
        loggedIn: 'true'
      };
    case PROFILE_ADD_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: payload,
        loggedIn: false
      };
    default:
      return state;
  }
};
