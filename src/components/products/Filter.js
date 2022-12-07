import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, sortProducts } from '../../actions/productActions';

const Filter = props => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.products);
    const { category, products, filteredProducts } = productList;
  
    const submitHandler = e => {
      e.preventDefault();
    };
    
    return (

    );
};

export default Filter;