import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {      
      email: '',
      name: '',
      lname: '',
      orgname: '',
      password: '',
      password2: '',
      agree:'',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    alert(this.state.agree);
    return false;

    const newUser = {      
      email: this.state.email,
      name: this.state.name,
      lname: this.state.lname,
      orgname: this.state.orgname,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <main className="app-wrapper">
      <header className="app-login-header">
        <div className="app-logo">
          <Link to="/javascript:void(0);">
            <figure>
              <img src="assets/layouts/img/logo-light.png" alt="" />
            </figure>
          </Link>
        </div>     
      </header>
      <section className="app-login-contents">
        <div className="container">
          <h1>Register as a Parther</h1>
          <div className="ins">
            <div className="social-gutter">
              <h2>Sign In with</h2>
              <div className="social-btns">
                <Link to="/organization" className="btn blue"><i className="fa fa-facebook"></i></Link>
                <Link to="/organization" className="btn blue"><i className="fa fa-google"></i></Link>
                <Link to="/organization" className="btn blue"><i className="fa fa-instagram"></i></Link>
              </div>
            </div>
            <p className="or">or</p>
            <form className="horizontal-form" noValidate onSubmit={this.onSubmit}>
              <div className="form-body">
                <div className="form-group">
                  <label className="label-control">Email</label>
                  <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                </div>                
                <div className="form-group">
                  <label className="label-control">First Name</label>
                  <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                </div>
                <div className="form-group">
                  <label className="label-control">Last Name</label>
                  <TextFieldGroup
                  placeholder="Last Name"
                  name="lname"
                  value={this.state.lname}
                  onChange={this.onChange}
                  error={errors.lname}
                />
                </div>
                <div className="form-group">
                  <label className="label-control">Organization Name</label>
                  <TextFieldGroup
                  placeholder="Organization Name"
                  name="orgname"
                  value={this.state.orgname}
                  onChange={this.onChange}
                  error={errors.orgname}
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
                <div className="form-group">
                  <label className="label-control">Confirm Password</label>
                  <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                </div>
                <div className="form-group beta-2">
                  <label className="app-checkbox"> I have read and agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/">Privacy Policy</Link>
                  <input name="agree" type="checkbox" value="0" name="0" required /><span></span></label>
                </div>
                <div className="form-actions">
                <input type="submit" className="btn orange" />
                </div>
                <div className="link-actions">
                  <Link to="/forgot" className="float-left">Forgot Your Password</Link>
                  <p class="float-right">Have an account: <Link to="/login">Sign In</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main> 
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
