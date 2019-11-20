import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  moment  from 'moment';

class ProductItems extends Component {
  render() {
    const { product } = this.props;
    //console.log(auth);
    let date_created = moment(product.date_created).format('YYYY-MM-DD HH:mm A');
    let pid =  'products/' + product.id ;
    return (
        <tbody>
        <tr>
          <td>{ product.name }</td>
          <td>{ product.sku }</td>
          <td>{ product.price }</td>
          <td>{ date_created }</td>
          <td><img width="100" src={ product.images[0].src } alt={ product.name } /></td>
          <td><Link className="btn orange" to={ pid }><i className="zmdi zmdi-zoom-in"></i> Preview</Link></td>
        </tr>                                   
      </tbody>      
    );
  }
}

ProductItems.defaultProps = {
    showActions: true
  };

  
ProductItems.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth    
});
export default connect(mapStateToProps)(ProductItems);