export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const PURCHASE_CONFIRMATION = "PURCHASE_CONFIRMATION";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
import products from '../components/Products/ProductsList';

  // export const fetchProducts = () => {
  //   return {
  //     type: FETCH_PRODUCTS,
  //     payload: products, // Import the products array from the mock data file
  //   };
  // }

  export const fetchProducts = () => {
    return (dispatch) => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: FETCH_PRODUCTS,
            payload: data,
          });
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };
  };

  export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };

  export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: productId,
    };
  };
  
  export const clearCart = () => {
    return {
      type: CLEAR_CART,
    };
  };
  
  export const purchaseConfirmation = () => {
    return {
      type: PURCHASE_CONFIRMATION,
    };
  };

  export const addToFavorites = (productId) => {
    return {
      type: ADD_TO_FAVORITES,
      payload: productId,
    };
  };
  
  export const removeFromFavorites = (productId) => {
    return {
      type: REMOVE_FROM_FAVORITES,
      payload: productId,
    };
  };
  