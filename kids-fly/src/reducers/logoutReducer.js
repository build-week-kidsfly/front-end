import { LOGOUT } from '../actions/logout';

const initialState = {
  logout: false,
  token: localStorage.getItem('token')
};

export const logoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        logout: true,
        token: localStorage.clear()
      };
    default:
      return state;
  }
};
