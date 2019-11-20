import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

// Layout Components
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import NotFound from './components/not-found/NotFound';

// Login/Register
import Login from './components/auth/Login';
//import Register from './components/auth/Register';

// Pages Routes
import Dashboard from './components/pages/dashboard';
import Schedule from './components/pages/schedule';
import Products from './components/pages/products';
import ProductDetails from './components/pages/products/ProductDetails';
import Purchase from './components/pages/purchase';
import Customers from './components/pages/customers';
import Listings from './components/pages/listings';
import Settings from './components/pages/settings';
import MyAccount from './components/pages/settings/my-account';


import './App.css';


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <main className="app-wrapper">
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Header} />
          <PrivateRoute path="/" component={Navigation} />
            <section className="app-container">
              <Route exact path="/not-found" component={NotFound} />
              
              <Switch>                
                <PrivateRoute exact path="/" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/schedule" component={Schedule} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/customers" component={Customers} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/products" component={Products} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/products/:id" component={ProductDetails} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/purchase" component={Purchase} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/listing" component={Listings} /> 
              </Switch>
              <Switch>
                <PrivateRoute exact path="/settings" component={Settings} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/my-account" component={MyAccount} />
              </Switch>
            </section>
            
          </main>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
