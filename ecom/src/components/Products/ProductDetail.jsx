import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts,addToCart, addToFavorites, removeFromFavorites  } from "../../actions/productActions";

const ProductDetail = () => {
    const { id } = useParams();
  const dispatch = useDispatch();
  const productId = parseInt(id);
  const favorites = useSelector((state) => state.products.favorites);
  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item.id === productId);
  const isFavorite = favorites.includes(productId);

  console.log("proddddddddd",product)
  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = (productId) => {
    dispatch(addToFavorites(productId));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img height={100} width={100} src={product.image}/>
      <p>Price: ${product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add to cart</button>
      {isFavorite ? (
        <button onClick={() => handleRemoveFromFavorites(productId)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => handleAddToFavorites(productId)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default ProductDetail;