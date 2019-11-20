import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Schedule extends Component{
    render(){
        return(
            <section className="app-contents">
            <div className="app-head">
              <h1>Schedule</h1>
            </div>
            <div className="applet-container">
              <div className="applet-head">
                <h2>No Schedule Created</h2>  
              </div>
              <div className="applet-body">
                <div className="null-case">
                  <Link to="schedule.html">
                    <figure>
                      <img src="assets/layouts/img/schedule.png" alt="" />
                    </figure>
                  </Link>
                  <div className="cnt">
                    <p>Get started by making a listing.</p>
                    <Link to="" className="btn white">Learn More</Link>
                    <Link to="add-listing.html" className="btn orange">Create</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Schedule;