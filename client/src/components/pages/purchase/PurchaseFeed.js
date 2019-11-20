import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PurchaseItems from './PurchaseItems';

class PurchaseFeed extends Component {
  render() {
    const { purchases } = this.props;
    return purchases.map(purchase => <PurchaseItems key={purchase.id} purchase={purchase} />);
  }
}

PurchaseFeed.propTypes = {
  purchases: PropTypes.array.isRequired
};

export default PurchaseFeed;
