import { PROFILE_START, PROFILE_SUCCESS, PROFILE_FAILURE } from '../actions';

const initialState = {
  profile: [],
  gettingProfile: 'false',
  error: ''
};

export const getProfile = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_START:
      return {
        ...state,
        gettingProfile: true,
        error: ''
      };
    case PROFILE_SUCCESS:
      console.log(state.profile);
      return {
        ...state,
        gettingProfile: false,
        error: '',
        profile: payload
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        gettingProfile: false,
        error: payload
      };
    default:
      return state;
  }
};
