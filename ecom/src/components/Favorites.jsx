import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import {  removeFromFavorites} from "../actions/productActions";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.products.favorites);
    const products = useSelector((state) => state.products.products);

    // Filter the products array to get the favorite products
    const favoriteProducts = favorites.map((productId) =>
      products.find((product) => product.id === productId)
    );

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  console.log('favvvvvvvv',favoriteProducts);

  return (
    <div>
      <h2>Favorites</h2>
    
        <>
      {favoriteProducts.length === 0 ? (
        <p>this is empty.</p>
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
          {favoriteProducts.map((favitem) => (
            <tr>
            <td>{favitem.title}</td>
            <td>{favitem.price}</td>
           <td><button onClick={() => handleRemoveFromFavorites(favitem.id)}>Remove from Favorites</button></td>
             
            </tr>
          ))}
            </tbody>
            </table>
        </ul>
        </>
      )}
      </>
    </div>
  );
};

export default Favorites;