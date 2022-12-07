const BASE_URL = 'http://localhost:3001/api/v1';

//filter fetch-/products
export const fetchProducts = () => dispatch => {
    fetch(`${BASE_URL}/products`)
      .then(res => res.json())
      .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }));
  };
  
  //filter search
  export const filterProducts = (products, filter) => dispatch => {
    const filteredProducts = products.filter(product => product.name.toUpperCase().indexOf(filter.toUpperCase()) > -1);
  
    dispatch({
      type: 'FILTER_PRODUCTS_BY_SEARCH',
      payload: {
        filter: filter,
        filteredProducts: filteredProducts,
      },
    });
  };