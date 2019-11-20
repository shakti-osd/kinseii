import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


class Header extends Component{

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
    
    render() {
      const { isAuthenticated, user } = this.props.auth;

      const userPic = (
        <span>
          <img
          className="rounded-circle"
          src={user.avatar}
          alt={user.name}
          style={{ width: '40px', marginRight: '15px' }}
          title=""
        />{' '}
        <span className="username"> {user.name}{' '} {user.lname}</span>{' '}
      </span>
      )

      const guestPic = (
        <span>         
        <span className="username">My Account</span>{' '}
      </span>
      )

        const authLinks = (
          <ul className="nav">
            <li>
              <Link to="/my-account" className="dropdown-item"><i className="zmdi zmdi-account"></i> User Account</Link>
            </li>
            <li>
              <Link to="/settings" className="dropdown-item"><i className="zmdi zmdi-settings"></i> Organization Settings</Link>
            </li>
            <li className="nav-item">
              <a
                href="/"
                onClick={this.onLogoutClick.bind(this)}
                className="dropdown-item"><i className="zmdi zmdi-sign-in"></i>Logout
              </a>
            </li>
          </ul>
        );

        const guestLinks = (
          <ul className="nav">
            <li className="nav-item">
              <Link to="/register" className="dropdown-item"><i className="zmdi zmdi-sign-in"></i>
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="dropdown-item"><i className="zmdi zmdi-sign-in"></i>   Login
              </Link>
            </li>
          </ul>
        );

        const publicUrl = '/assets/layouts/img/logo.png';

        return(
            <header className="app-header">
            <div className="menu-trigger"><i></i></div>
            <div className="app-logo">
              <Link to="/">
                <figure>
                  <img src={publicUrl} alt="" />
                </figure>
              </Link>
            </div>
            <div className="app-top">
              <div className="navbar dropdown dropdown-user">
                <Link className="dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                   
                  {isAuthenticated ? userPic : guestPic }                  
                  <i className="fa fa-angle-down"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                {isAuthenticated ? authLinks : guestLinks}
                </div>
              </div> 
            </div>     
          </header> 
        )
    }

}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(
  Header
);
