export const productsReducer = (
    state = {
      products: [],
      filteredProducts: [],
      product: { reviews: [] },
      filter: '',
      category: '',
      sort: 'latest',
      success: true,
    },
    action
  ) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          product: '',
          products: action.payload,
          filteredProducts: action.payload,
        };
  
      case 'FILTER_PRODUCTS_BY_CATEGORY':
        return {
          ...state,
          category: action.payload.category,
          filteredProducts: action.payload.filteredByCategory,
        };
  
      case 'FILTER_PRODUCTS_BY_SEARCH':
        return {
          ...state,
          filter: action.payload.filter,
          filteredProducts: action.payload.filteredProducts,
        };
  
      case 'ORDER_PRODUCTS_BY_PRICE':
        return {
          ...state,
          sort: action.payload.sort,
          filteredProducts: action.payload.sortedProducts,
        };
  
      case 'GET_PRODUCT':
        return {
          ...state,
          product: action.payload,
        };
  
      case 'SAVE_PRODUCT':
        return {
          ...state,
          success: true,
          product: action.payload,
        };
  
      case 'DELETE_PRODUCT':
        return {
          ...state,
          success: true,
          product: action.payload,
        };
  
      case 'SAVE_PRODUCT_REVIEW':
        return {
          ...state,
          success: true,
          review: action.payload,
        };
  
      default:
        return state;
    }
  };
  