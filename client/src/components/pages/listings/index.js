import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Listing extends Component{
    render(){
        return(
            <section className="app-contents">
            <div className="app-head">
              <h1>Listings</h1>
            </div>
            <div className="applet-container">
              <div className="applet-head">
                <h2>Organization Listing</h2>  
                <div className="actions">   
                  <Link to="/add-listing" className="btn orange"><i className="zmdi zmdi-plus"></i> Create</Link>
                </div>   
              </div>
              <div className="applet-body">
                <div className="table-container">
                  <table className="table pagination-table middle btn-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Listing Name</th>
                        <th>Duration</th>
                        <th>Total Clicks</th>
                        <th>Total Revenue</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <figure className="thumb">
                            <img src="assets/layouts/img/thumb.png" alt="" />
                          </figure>
                        </td>
                        <td>New Listing</td>
                        <td>Form:--<br/>To:--</td>
                        <td>15</td>
                        <td>$500</td>
                        <td><span className="label-info yellow">Under Review</span></td>
                        <td><Link className="btn orange" to="/listing-details"><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
                      </tr>
                      <tr>
                        <td>
                          <figure className="thumb">
                            <img src="assets/layouts/img/thumb.png" alt="" />
                          </figure>
                        </td>
                        <td>New Listing</td>
                        <td>Form:--<br/>To:--</td>
                        <td>15</td>
                        <td>$500</td>
                        <td><span className="label-info grey">Unpublished</span></td>
                        <td><Link className="btn orange" to="/listing-details"><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
                      </tr>
                      <tr>
                        <td>
                          <figure className="thumb">
                            <img src="assets/layouts/img/thumb.png" alt="" />
                          </figure>
                        </td>
                        <td>New Listing</td>
                        <td>Form:--<br/>To:--</td>
                        <td>15</td>
                        <td>$500</td>
                        <td><span className="label-info yellow">Under Review</span></td>
                        <td><Link className="btn orange" to="/listing-details"><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
                      </tr>
                      <tr>
                        <td>
                          <figure className="thumb">
                            <img src="assets/layouts/img/thumb.png" alt="" />
                          </figure>
                        </td>
                        <td>New Listing</td>
                        <td>Form:--<br/>To:--</td>
                        <td>15</td>
                        <td>$500</td>
                        <td><span className="label-info yellow">Under Review</span></td>
                        <td><Link className="btn orange" to="/listing-details"><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
                      </tr>
                      <tr>
                        <td>
                          <figure className="thumb">
                            <img src="assets/layouts/img/thumb.png" alt="" />
                          </figure>
                        </td>
                        <td>New Listing</td>
                        <td>Form:--<br/>To:--</td>
                        <td>15</td>
                        <td>$500</td>
                        <td><span className="label-info yellow">Under Review</span></td>
                        <td><Link className="btn orange" to="/listing-details"><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Listing;