import { FETCH_PRODUCTS , ADD_TO_CART ,REMOVE_FROM_CART, CLEAR_CART, PURCHASE_CONFIRMATION  ,ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "../actions/productActions";

const initialState = {
  products: [],
  cart:JSON.parse(localStorage.getItem("cart")) || [],
  favorites: [],
  isPurchased: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case ADD_TO_CART:
        const updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); 
      return {
        ...state,
        cart: updatedCart,
      };
      case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };
    case CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    case PURCHASE_CONFIRMATION:
      localStorage.removeItem("cart");
      return {
        ...state,
        isPurchased: true,
      };
        case ADD_TO_FAVORITES:
            return {
              ...state,
              favorites: [...state.favorites, action.payload],
            };
          case REMOVE_FROM_FAVORITES:
            console.log("state.favourites---",state.favorites, action.payload)
            return {
              ...state,
              favorites: state.favorites.filter((item) => item !== action.payload),
            };
    default:
      return state;
  }
};

export default productReducer;