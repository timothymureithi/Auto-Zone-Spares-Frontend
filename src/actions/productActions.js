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

  export const sortProducts = (products, sort) => dispatch => {
    const sortedProducts = products.slice();
    if (sort === 'latest') {
      sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
      sortedProducts.sort((a, b) => (sort === 'lowest' ? (a.price > b.price ? 1 : -1) : a.price > b.price ? -1 : 1));
    }
  
    dispatch({
      type: 'ORDER_PRODUCTS_BY_PRICE',
      payload: {
        sort: sort,
        sortedProducts: sortedProducts,
      },
    });
  };