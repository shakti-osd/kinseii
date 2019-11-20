import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItems from './ProductItems';

class ProductFeed extends Component {
  render() {
    const { products } = this.props;
    return products.map(product => <ProductItems key={product.id} product={product} />);
  }
}

ProductFeed.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductFeed;
