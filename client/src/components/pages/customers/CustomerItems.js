import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import  moment  from 'moment';

class CustomerItems extends Component {
  render() {
    const { customer } = this.props;
    let date_created = moment(customer.date_created).format('YYYY-MM-DD HH:mm A');
    return (
        <tbody>
        <tr>
          <td>{ customer.billing.first_name } { customer.billing.last_name }</td>
          <td>{ customer.email }</td>
          <td>{ customer.total_spent }</td>
          <td>{ date_created }</td>
          <td><Link className="btn orange" to="customer-details"><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
        </tr>                                   
      </tbody>      
    );
  }
}

CustomerItems.defaultProps = {
  showActions: true
};

  
CustomerItems.propTypes = {
  customer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
  });
export default connect(mapStateToProps)(CustomerItems);