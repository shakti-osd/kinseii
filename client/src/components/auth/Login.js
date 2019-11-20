import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <main className="app-wrapper">
        <header className="app-login-header">
          <div className="app-logo">
            <Link to="/javascript:void(0);">
              <figure>
                <img src="assets/layouts/img/logo-light.png" alt="Kinseii" />
              </figure>
            </Link>
          </div>     
        </header>
        <section className="app-login-contents">
          <div className="container">
            <h1>Sign In</h1>
            <div className="ins">
              {/* <div className="social-gutter">
                <h2>Sign In with</h2>
                <div className="social-btns">
                  <Link to="/organization" className="btn blue"><i className="fa fa-facebook"></i></Link>
                  <Link to="/organization" className="btn blue"><i className="fa fa-google"></i></Link>
                  <Link to="/organization" className="btn blue"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
              <p className="or">or</p> */}
              <form className="horizontal-form" onSubmit={this.onSubmit}>
                <div className="form-body">
                  <div className="form-group">
                    <label className="label-control">Username</label>
                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-control">Password</label>
                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                  </div>
                  <div className="form-group beta-2">
                      
                  </div>
                  <div className="form-actions">
                  <input type="submit" className="btn orange" />
                  </div>
                  {/* <div className="link-actions">
                    <Link to="/forgot" className="float-left">Forgot Your Password</Link>
                    <p className="float-right">Don't have an account: <Link to="/register">Register</Link></p>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
