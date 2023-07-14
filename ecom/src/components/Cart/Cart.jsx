import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { removeFromCart, clearCart, purchaseConfirmation  , addToFavorites, removeFromFavorites} from "../../actions/productActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.products.cart);
    const favorites = useSelector((state) => state.products.favorites);
    const isPurchased = useSelector((state) => state.products.isPurchased);
  const cartCount = cartItems.length;
console.log("cartin=tem----",cartItems)
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePurchaseConfirmation = () => {
    dispatch(purchaseConfirmation());
    toast.success('Purchase successful.');
  };

  const handleAddToFavorites = (productId) => {
    dispatch(addToFavorites(productId));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div>
      <h2>Cart</h2>
    
        <>
        <ToastContainer/>

      {isPurchased ? (
        <p>Purchase confirmed! Thank you for your purchase.</p>
      ) :
        <>
      <p>Cart count: {cartCount}</p>
        {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
        <ul>

            <table>
            <tbody>
                <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Operations</th>
                </tr>
          {cartItems.map((item) => (
            <tr>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td><button onClick={() => handleRemoveFromCart(item.id)}>Remove</button></td>
            {favorites.includes(item.id) ? (
                <button onClick={() => handleRemoveFromFavorites(item.id)}>Remove from Favorites</button>
              ) : (
                <button onClick={() => handleAddToFavorites(item.id)}>Add to Favorites</button>
              )}
            </tr>
          ))}
            </tbody>
            </table>
        </ul>
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={handlePurchaseConfirmation}>Purchase</button>
        </>
      )}
      </>
      }
      </>
    </div>
  );
};

export default Cart;