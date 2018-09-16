import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { actRemoveProduct, actChangeMessage, actUpdateProduct } from './../actions/index';

class CartContainer extends Component {
  render() {
    var {cart} = this.props;
    return (
      <Cart>
        { this.showCartItem(cart) }
        { this.showTotalAmount(cart) }
      </Cart>
    );
  }  

  showCartItem = (cart) => {
    var {onDeleteProduct, onChangeMessage, onUpdateProduct} = this.props;
    var result = <tr><td>{Message.EMPTY_CART}</td></tr>;
    if(cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProduct = {onDeleteProduct}
            onChangeMessagePar = {onChangeMessage}
            onUpdateProduct = {onUpdateProduct}
          />
        );
      });
    }
    return result;
  }

  showTotalAmount = (cart) => {
    var result = null;
    if(cart.length > 0) {
      result = <CartResult cart = {cart} />
    }
    return result;
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onUpdateProduct: PropTypes.func.isRequired
  
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToDrop = (dispatch, props) => {
  return {
    onDeleteProduct: (product) => {
      dispatch(actRemoveProduct(product));
    },

    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },

    onUpdateProduct: (product, quantity) => {
      dispatch(actUpdateProduct(product, quantity));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToDrop)(CartContainer);
