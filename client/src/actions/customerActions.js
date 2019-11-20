import axios from 'axios';

import {
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
  WOOCOMMERCE_URI
} from './types';


// Get customers
export const getCustomers = () => dispatch => {
  dispatch(setCustomerLoading());
  axios
   .get(WOOCOMMERCE_URI + 'customers')
    .then(res =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: null
      })
    );
};



// Customer loading
export const setCustomerLoading = () => {
  return {
    type: CUSTOMER_LOADING
  };
};
