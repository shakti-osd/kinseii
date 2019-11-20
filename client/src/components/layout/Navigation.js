import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component{
    
    render() {
        return(
         <aside className="app-sidebar">
          <ul className="app-sidebar-menu">
            <li>
              <NavLink exact={true} activeClassName='is-active' to="/">
                <i className="home-icon"></i>
                <span className="title">Dashboard</span>                        
              </NavLink>                           
            </li>          
            <li>
              <NavLink activeClassName='is-active' to="/schedule">
                <i className="schedule-icon"></i>
                <span className="title">Schedule</span>
              </NavLink>                               
            </li>   
            <li>
              <NavLink activeClassName='is-active' to="/products">
                <i className="purchase-icon"></i>
                <span className="title">Products</span>                        
              </NavLink>                           
            </li>  
            <li>
              <NavLink activeClassName='is-active' to="/purchase">
                <i className="purchase-icon"></i>
                <span className="title">Purchases</span>                        
              </NavLink>                           
            </li>            
            <li>
              <NavLink activeClassName='is-active' to="/customers">
                <i className="customer-icon"></i>
                <span className="title">Customers</span>
              </NavLink>                               
            </li>  
            <li>
              <NavLink activeClassName='is-active' to="/listing">
                <i className="listing-icon"></i>
                <span className="title">Listings</span>
              </NavLink>                               
            </li>  
            <li>
              <NavLink activeClassName='is-active' to="/settings">
                <i className="settings-icon"></i>
                <span className="title">Settings</span>
              </NavLink>                               
            </li>                                  
          </ul>
        </aside>
        )
    }

}
 
export default Navigation;