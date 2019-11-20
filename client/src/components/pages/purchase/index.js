import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PurchaseFeed from './PurchaseFeed';
import Spinner from '../../common/Spinner';
import { getPurchases } from '../../../actions/purchaseActions';

class Purchases extends Component{
  componentDidMount() {
    this.props.getPurchases();
  }
      
    render(){
      const { purchases, loading } = this.props.purchase;
      let purchaseContent;

      if (purchases === null || loading) {
        purchaseContent = <Spinner />;
      } else {
        purchaseContent = <PurchaseFeed purchases={purchases} />;
      }

        return(
          <section className="app-contents">          
            <div className="applet-container margin-top-20">
              <div className="applet-head">
                <h2>Orders List View</h2>                     
              </div>
              <div className="applet-sub">
               
                <div className="applet-body">
                  <div className="table-container">
                    <table className="table" id="datatables">
                      <thead>
                        <tr>
                          <th>Order Date</th>
                          <th>Order Number</th>
                          <th>Customer Name</th>
                          <th>Amount Total</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {purchaseContent}
                    </table>
                  </div>
                </div>    
            </div>   
            </div>     
          </section>      
        )
    }
}

Purchases.propTypes = {
  getPurchases: PropTypes.func.isRequired,
  purchase: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  purchase: state.purchase
});

export default connect(mapStateToProps, { getPurchases })(Purchases);

