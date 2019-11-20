import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerItems from './CustomerItems';

class CustomerFeed extends Component {
  render() {
    const { customers } = this.props;
    return customers.map(customer => <CustomerItems key={customer.id} customer={customer} />);
  }
}

CustomerFeed.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerFeed;
