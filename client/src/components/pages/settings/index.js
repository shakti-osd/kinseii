import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Settings extends Component{
    render(){
        return(
        <section className="app-contents">
          <div className="app-head">
            <h1>Settings</h1>
          </div>
          <div className="applet-container">
            <div className="applet-head">
              <h2>Settings</h2>  
            </div>
            <div className="applet-body">
              <div className="row">     
                {/* <div className="col-lg-3 col-md-6">  
                  <Link to="/general" className="setting-gutter">
                    <span className="btn white">
                      <i className="zmdi zmdi-settings"></i>
                    </span>
                    <div className="cnt">
                      <h5>General</h5>
                      <span>View and update your organizations details.</span>
                    </div>
                  </Link>           
                </div>  
                <div className="col-lg-3 col-md-6">  
                  <Link to="/locations" className="setting-gutter">
                    <span className="btn white">
                      <i className="zmdi zmdi-pin"></i>
                    </span>
                    <div className="cnt">
                      <h5>Locations</h5>
                      <span>View and update your locations.</span>
                    </div>
                  </Link>           
                </div>  
                <div className="col-lg-3 col-md-6">  
                  <Link to="/payments" className="setting-gutter">
                    <span className="btn white">
                      <i className="zmdi zmdi-card"></i>
                    </span>
                    <div className="cnt">
                      <h5>Payments</h5>
                      <span>Manage your payment settings.</span>
                    </div>
                  </Link>           
                </div>   */}
                <div className="col-lg-3 col-md-6">  
                  <Link to="/my-account" className="setting-gutter">
                    <span className="btn white">
                      <i className="zmdi zmdi-account"></i>
                    </span>
                    <div className="cnt">
                      <h5>Your account</h5>
                      <span>Manage the current users settings.</span>
                    </div>
                  </Link>           
                </div>         
              </div>
            </div>
          </div>
        </section>
        )
    }
}

export default Settings;