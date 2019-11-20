import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import productReducer from './productReducer';
import purchaseReducer from './purchaseReducer';
import customerReducer from './customerReducer';

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,
  purchase: purchaseReducer,
  customer: customerReducer,
  errors: errorReducer

});
