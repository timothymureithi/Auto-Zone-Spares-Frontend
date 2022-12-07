import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';

const MiniCart = props => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);
  
    const removeFromCartHandler = productId => {
      dispatch(removeFromCart(productId));
    };

    return (


    );
};

    export default MiniCart;

