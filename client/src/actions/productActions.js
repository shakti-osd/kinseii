import axios from 'axios';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_LOADING,
  WOOCOMMERCE_URI
} from './types';


// Get products
export const getProducts = () => dispatch => {
  dispatch(setProductLoading());
  axios
   .get(WOOCOMMERCE_URI + 'products')
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCTS,
        payload: null
      })
    );
};

// Get product Details
export const getProduct = (id) => dispatch => {
  dispatch(setProductLoading());
  axios
   .get(WOOCOMMERCE_URI + `products/${id}`)
    .then(res =>
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCT,
        payload: null
      })
    );
};

// Product loading
export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING
  };
};
