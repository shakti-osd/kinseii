import {
    GET_CUSTOMERS,
    CUSTOMER_LOADING
  } from '../actions/types';
  
  const initialState = {
    customers: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      
    case CUSTOMER_LOADING:
        return {
            ...state,
            loading: true
        };

      case GET_CUSTOMERS:
        return {
          ...state,
          customers: action.payload,
          loading: false
        };      
     
      default:
        return state;
    }
  }
  