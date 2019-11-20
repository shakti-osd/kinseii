import {
    GET_PURCHASES,
    PURCHASE_LOADING
  } from '../actions/types';
  
  const initialState = {
    purchases: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      
    case PURCHASE_LOADING:
        return {
            ...state,
            loading: true
        };

      case GET_PURCHASES:
        return {
          ...state,
          purchases: action.payload,
          loading: false
        };      
     
      default:
        return state;
    }
  }
  