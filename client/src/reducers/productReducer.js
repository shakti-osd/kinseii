import {
    GET_PRODUCT,
    GET_PRODUCTS,
    PRODUCT_LOADING
  } from '../actions/types';
  
  const initialState = {
    product: [],
    products: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      
    case PRODUCT_LOADING:
        return {
            ...state,
            loading: true
        };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false
      };

      case GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          loading: false
        };      
     
      default:
        return state;
    }
  }
  