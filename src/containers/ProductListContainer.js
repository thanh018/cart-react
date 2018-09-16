import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';

class ProductListContainer extends Component {
  render() {
    var {productList} = this.props;
    return (
      <ProductList>
        { this.showProductList(productList) }
      </ProductList>
    );
  }  

  showProductList(productList) {
    var { onAddToCart, onChangeMessage } = this.props;
    var result = null;
    if(productList.length > 0) {
      result = productList.map((product, index) => {
        return <Product
          key = {index}
          product = {product}
          onAddToCartPar = {onAddToCart}
          onChangeMessagePar = {onChangeMessage}
        />
      });
    }
    return result;
  }  
}

ProductListContainer.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    productList: state.productList
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },

    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
