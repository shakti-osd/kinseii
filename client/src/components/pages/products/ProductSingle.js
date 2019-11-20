import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  moment  from 'moment';

import './product.css';

class ProductSingle extends Component {
  render() {
    const { product } = this.props;
    let date_created = moment(product.date_created).format('YYYY-MM-DD HH:mm A');
    let categories = product.categories;   
    let catAll = '';
    for(var cat of categories){
      catAll += '<li>' + cat.name + '</li>';
    }
    
    return (
          <tbody>        
            <tr><td>Product Name</td><td>{ product.name }</td></tr>
            <tr><td>Product SKU</td><td>{ product.sku }</td></tr>
            <tr><td>Product Price</td><td>{ product.price }</td></tr>
            <tr><td>Product Created Date</td><td>{ date_created }</td></tr>
            <tr><td>Product Image</td><td><img width="100" src={ product.images[0].src } alt={ product.name } /></td></tr>
            <tr><td>Product Description</td><td>{ ReactHtmlParser(product.description) }</td></tr>                                 
            <tr><td>Product Categories</td><td><ul>{ ReactHtmlParser(catAll) }</ul></td></tr> 
          </tbody>   
    );
  }
}

ProductSingle.defaultProps = {
    showActions: true
  };

  
  ProductSingle.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth    
});
export default connect(mapStateToProps)(ProductSingle);