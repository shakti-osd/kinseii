import axios from 'axios';

import {
  GET_PROFILE,
  CLEAR_CURRENT_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS
} from './types';


// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
 //debugger;
  axios
    .post('/api/profile', profileData)
    // .then(res =>
    //   dispatch({
    //     type: GET_PROFILE,
    //     payload: res.data
    //   })
    // )
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
