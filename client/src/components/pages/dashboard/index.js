import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component{
    render(){
        return(
            <section className="app-contents">
          <div className="app-head">
            <h1>Dashboard</h1>
          </div>
          <div className="info-bar red">
            <p>Please provide the following information for your Payment Account.</p>
          </div>
          <div className="dash-items">
            <div className="row ">
              <div className="col-md-6 col-lg-3">
                <div className="box orange">
                  <h3>$100,99</h3>
                  <p>Today</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="box blue">
                  <h3>54</h3>
                  <p>Visits Today</p>
                  <p>Vendor Profile</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="box green">
                  <h3>79</h3>
                  <p>Visits Today</p>
                  <p>Your Listings</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="box yellow">
                  <h3>$5k</h3>
                  <p>Next Payout</p>
                  <p>07/07/18</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="applet-container">
                <div className="applet-head">
                  <h2>Today Events</h2> 
                  <div className="actions"> 
                    <Link to="" className="link">See All</Link>
                  </div>
                </div>
                <div className="applet-body">
                  <div className="table-container">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td><Link to="" className="link">Badminton Lessons</Link></td>
                          <td>Raymond Copeland</td>
                          <td>2 pm</td>
                        </tr>
                        <tr>
                          <td><Link to="" className="link">Badminton Lessons</Link></td>
                          <td>Raymond Copeland</td>
                          <td>2 pm</td>
                        </tr>
                        <tr>
                          <td><Link to="" className="link">Badminton Lessons</Link></td>
                          <td>Raymond Copeland</td>
                          <td>2 pm</td>
                        </tr>
                        <tr>
                          <td><Link to="" className="link">Badminton Lessons</Link></td>
                          <td>Raymond Copeland</td>
                          <td>2 pm</td>
                        </tr>
                        <tr>
                          <td><Link to="" className="link">Badminton Lessons</Link></td>
                          <td>Raymond Copeland</td>
                          <td>2 pm</td>
                        </tr>
                        <tr>
                          <td><Link to="" className="link">Badminton Lessons</Link></td>
                          <td>Raymond Copeland</td>
                          <td>2 pm</td>
                        </tr>
                        <tr>
                          <td><Link to="" className="link">Badminton Lessons</Link></td>
                          <td>Raymond Copeland</td>
                          <td>2 pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="dash-slide">             
                <div id="dash-slide" className="owl-carousel">
                  <div className="item">
                    <figure>
                      <img src="assets/layouts/img/img1.jpg" alt="" />
                    </figure>
                    <div className="cnt">
                      <h2>Always Look On The Bright Side Of Life</h2>
                      <p>Lorem psum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages, typography, and graphical layout. Even though using "lorem ipsum" often arouses curiosity</p>
                      <Link to="" className="more">Read More</Link>
                    </div>
                  </div>
                  <div className="item">
                    <figure>
                      <img src="assets/layouts/img/img1.jpg" alt="" />
                    </figure>
                    <div className="cnt">
                      <h2>Always Look On The Bright Side Of Life</h2>
                      <p>Common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages, typography, and graphical layout. Even though using "lorem ipsum" often arouses curiosity</p>
                      <Link to="" className="more">Read More</Link>
                    </div>
                  </div>
                  <div className="item">
                    <figure>
                      <img src="assets/layouts/img/img1.jpg" alt="" />
                    </figure>
                    <div className="cnt">
                      <h2>Always Look On The Bright Side Of Life</h2>
                      <p>Lorem psum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages, typography, and graphical layout. Even though using "lorem ipsum" often arouses curiosity</p>
                      <Link to="" className="more">Read More</Link>
                    </div>
                  </div>
                </div>                
              </div>
            </div>
          </div>
          <div className="dash-perform">
            <div className="applet-container">
              <div className="applet-head">
                <h2>Overview Performers</h2> 
              </div>
              <div className="applet-sub">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <Link className="nav-link active" to="#tab1" role="tab" data-toggle="tab">Today</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#tab2" role="tab" data-toggle="tab">Last 7 Days</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#tab3" role="tab" data-toggle="tab">Last 30 Days</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#tab4" role="tab" data-toggle="tab">Last 90 Days</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#tab5" role="tab" data-toggle="tab">This Year</Link>
                  </li>
                </ul>
              </div>
              <div className="applet-body">
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane in active" id="tab1">
                    <div className="row">
                      <div className="col-lg-6 brdr">
                        <div className="head">
                          <h2>Total Statistics</h2>
                        </div>
                        <div className="table-container">
                            <img src="assets/layouts/img/g.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="head">
                          <h2>Total Performers</h2>
                          <div className="actions"> 
                            <Link to="" className="link">See All</Link>
                          </div>
                        </div>
                        <div className="table-container">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>3k Visits</td>
                                <td>$250<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>2k Visits</td>
                                <td>$120<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>5k Visits</td>
                                <td>$720<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>3k Visits</td>
                                <td>$250<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>2k Visits</td>
                                <td>$120<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>5k Visits</td>
                                <td>$720<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>3k Visits</td>
                                <td>$250<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>2k Visits</td>
                                <td>$120<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>5k Visits</td>
                                <td>$720<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>3k Visits</td>
                                <td>$250<br/>0</td>
                              </tr>
                              <tr>
                                <td><Link to="" className="link">Badminton Lessons</Link></td>
                                <td>2k Visits</td>
                                <td>$120<br/>0</td>
                              </tr>
                            </tbody>
                          </table>                    
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab2">2</div>
                  <div role="tabpanel" className="tab-pane fade" id="tab3">3</div>
                  <div role="tabpanel" className="tab-pane fade" id="tab4">4</div>
                  <div role="tabpanel" className="tab-pane fade" id="tab5">5</div>
                </div>                
              </div>
            </div>
          </div>
          <div className="applet-container">
            <div className="applet-head">
              <h2>Recent Activity</h2> 
              <div className="actions"> 
                <Link to="" className="link">See All</Link>
              </div>
            </div>
            <div className="applet-body">
              <div className="table-container">
                <table className="table">
                  <tbody>
                    <tr>
                      <td><Link to="" className="link">Raymond Copeland</Link> published a new advertisement</td>
                      <td>Yesterday, 7pm</td>
                    </tr>
                    <tr>
                      <td><Link to="" className="link">Raymond Copeland</Link> bought a thing for $2500</td>
                      <td>4pm</td>
                    </tr>
                    <tr>
                      <td><Link to="" className="link">Raymond Copeland</Link> bought a thing for $1200</td>
                      <td>4pm</td>
                    </tr>
                    <tr>
                      <td><Link to="" className="link">Raymond Copeland</Link> bought a thing for $2500</td>
                      <td>4pm</td>
                    </tr>
                    <tr>
                      <td><Link to="" className="link">Raymond Copeland</Link> bought a thing for $2500</td>
                      <td>3pm</td>
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

export default Dashboard;