import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomerFeed from './CustomerFeed';
import Spinner from '../../common/Spinner';
import { getCustomers } from '../../../actions/customerActions';



class Customers extends Component{

    componentDidMount() {
      this.props.getCustomers();
    }
        

    render(){
      const { customers, loading } = this.props.customer;
      let customerContent;

      if (customers === null || loading) {
        customerContent = <Spinner />;
      } else {
        customerContent = <CustomerFeed customers={customers} />;
      }

     
        return(
            <section className="app-contents">          
            <div className="applet-container margin-top-20">
              <div className="applet-head">
                <h2>Customers List View</h2>                     
              </div>
              <div className="applet-sub">
               
                <div className="applet-body">
                  <div className="table-container">
                    <table className="table" id="datatables">
                      <thead>
                        <tr>
                          <th>Customer Name</th>
                          <th>Email</th>
                          <th>Total Spent</th>
                          <th>Registered Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      {customerContent}
                    </table>
                  </div>
                </div>    
            </div>   
            </div>     
          </section>
        )
    }
}

Customers.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customer: state.customer
});

export default connect(mapStateToProps, { getCustomers })(Customers);

