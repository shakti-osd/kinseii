import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductSingle from './ProductSingle';
import Spinner from '../../common/Spinner';
import { getProduct } from '../../../actions/productActions';



class Product extends Component{

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }
        

    render(){
     
    const { product, loading } = this.props.product;
    let productContent;

    if (product === null || loading || Object.keys(product).length === 0) {
        productContent = <Spinner />;
    } else {
        productContent = (       
          <ProductSingle product={product} showActions={false} />       
      );
    }
     
        return(
            <section className="app-contents">          
            <div className="applet-container margin-top-20">
              <div className="applet-head">
                <h2>Product Details</h2>                     
              </div>
              <div className="applet-sub">
               
                <div className="applet-body">
                  <div className="table-container">
                  <Link to="/products" className="btn btn-light mb-3">
                        Back To Product Listing
                    </Link>
                    <table>    
                    <thead></thead>   
                    {productContent}
                    </table>
                  </div>
                </div>    
            </div>   
            </div>     
          </section>
        )
    }
}

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { getProduct })(Product);

