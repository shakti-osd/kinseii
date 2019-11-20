import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductFeed from './ProductFeed';
import Spinner from '../../common/Spinner';
//import ProductItem from './ProductItems';
import { getProducts } from '../../../actions/productActions';



class Products extends Component{

    componentDidMount() {
      this.props.getProducts();
    }
        

    render(){
      const { products, loading } = this.props.product;
      let productContent;

      if (products === null || loading) {
        productContent = <Spinner />;
      } else {
        productContent = <ProductFeed products={products} />;
      }

     
        return(
            <section className="app-contents">          
            <div className="applet-container margin-top-20">
              <div className="applet-head">
                <h2>Products List View</h2>                     
              </div>
              <div className="applet-sub">
               
                <div className="applet-body">
                  <div className="table-container">
                    <table className="table" id="datatables">
                      
                      <thead>
                        <tr>
                          <th>Customer Name</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Order Date</th>
                          <th>Product Thumbnail</th>
                          <th>Actions</th>
                        </tr>
                      </thead>                      
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

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, { getProducts })(Products);

