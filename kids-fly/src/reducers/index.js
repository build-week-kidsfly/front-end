import { combineReducers } from 'redux';

import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { profileFormReducer } from './profileFormReducer';
import { getFlightReducer } from './getFlightReducer';
import { addAirportReducer } from './addAirportReducer';
import { logoutReducer } from './logoutReducer';
import { getProfile } from './getProfile';

export default combineReducers({
  signupReducer,
  loginReducer,
  profileFormReducer,
  getFlightReducer,
  addAirportReducer,
  logoutReducer,
  getProfile
});
