import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

class PurchaseItems extends Component {
  render() {
    const { purchase } = this.props;
    let order_date = moment(purchase.date_created).format('YYYY-MM-DD HH:mm A');
    return (
        <tbody>
        <tr>
          <td>{ order_date }</td>
          <td>{ purchase.number }</td>
          <td>{ purchase.billing.first_name } { purchase.billing.last_name }</td>
          <td>{ purchase.total }</td>
          <td>{ purchase.status }</td>
          <td><Link className="btn orange" to="order-details"><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
        </tr>                                   
      </tbody>      
    );
  }
}

PurchaseItems.defaultProps = {
    showActions: true
  };

  
  PurchaseItems.propTypes = {
  purchase: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
  });
export default connect(mapStateToProps)(PurchaseItems);