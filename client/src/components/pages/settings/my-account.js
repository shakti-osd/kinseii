import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import { createProfile, getCurrentProfile } from '../../../actions/profileActions';
import isEmpty from '../../../validation/is-empty';


class MyAccount extends Component{
  constructor(props) {
    super(props);
    this.state = {  
      name: '',
      lname: '',
      certificates: '',
      bio: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.name = !isEmpty(profile.name) ? profile.name : '';
      profile.lname = !isEmpty(profile.lname) ? profile.lname : '';
      profile.certificates = !isEmpty(profile.certificates) ? profile.certificates : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';

      // Set component fields state
      this.setState({
        name: profile.name,
        lname: profile.lname,
        certificates: profile.certificates,
        bio: profile.bio
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      name: this.state.name,
      lname: this.state.lname,
      certificates: this.state.certificates,
      bio: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


    render(){
      const { errors } = this.state;
        return(
            <section className="app-contents">
            <div className="app-head">
              <h1>Settings: Account Details</h1>
            </div>
            <div className="applet-container">
              <div className="applet-head">
                <h2>Settings</h2>  
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="applet-body">
                  <div className="form-body">
                    <h2 className="title">User profile</h2>
                    <div className="row">     
                      <div className="col-md-6">  
                        <div className="form-group">
                          <label className="label-control">First Name</label>
                          <TextFieldGroup
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                            info="First Name"
                          />
                        </div>           
                      </div>   
                      <div className="col-md-6">  
                        <div className="form-group">
                          <label className="label-control">Last Name</label>
                          <TextFieldGroup
                            placeholder="Last Name"
                            name="lname"
                            value={this.state.lname}
                            onChange={this.onChange}
                            error={errors.lname}
                            info="Last Name"
                          />
                        </div>           
                      </div>        
                    </div>
                    <h2 className="title">Test organizations user settings</h2>
                    <div className="row">     
                      <div className="col-md-6">  
                        <div className="form-group">
                          <label className="label-control">Certificates and accomplishments</label>
                          <TextAreaFieldGroup
                            placeholder="Certificates and accomplishments"
                            name="certificates"
                            value={this.state.certificates}
                            onChange={this.onChange}
                            error={errors.certificates}
                            info="Your certificates here"
                          />                        
                        </div>           
                      </div>   
                      <div className="col-md-6">  
                        <div className="form-group">
                          <label className="label-control">About me</label>
                          <TextAreaFieldGroup
                            placeholder="Short Bio"
                            name="bio"
                            value={this.state.bio}
                            onChange={this.onChange}
                            error={errors.bio}
                            info="Tell us a little about yourself"
                          />                         
                        </div>           
                      </div>        
                    </div>
                  </div>
                  <div className="form-action">
                    <button type="button" className="btn white">Cancel</button>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn orange"
                    />
                    {/* <button type="button" className="btn orange">Save</button> */}
                  </div>
                </div>

              </form>
            </div>
          </section>
        )
    }
}

MyAccount.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(MyAccount)
);
