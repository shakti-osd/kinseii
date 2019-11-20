import axios from 'axios';

import {
  GET_PURCHASES,
  PURCHASE_LOADING,
  WOOCOMMERCE_URI
} from './types';


// Get Orders
export const getPurchases = () => dispatch => {
  dispatch(setPurchaseLoading());
  axios
   .get(WOOCOMMERCE_URI + 'orders')
    .then(res =>
      dispatch({
        type: GET_PURCHASES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PURCHASES,
        payload: null
      })
    );
};



// Order loading
export const setPurchaseLoading = () => {
  return {
    type: PURCHASE_LOADING
  };
};
