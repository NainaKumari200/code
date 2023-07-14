import React, { useEffect, useState } from 'react'
import ProductDataValues from './ProductsList';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,addToCart , addToFavorites, removeFromFavorites} from "../../actions/productActions";
import './Products.css';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.products);
  const favorites = useSelector((state) => state.products?.favorites);
  const cartItems = useSelector((state) => state.products.cart);

  console.log('abcd',products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    category: "",
    maxPrice: Infinity,
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  const handleAddToFavorites = (productId) => {
    dispatch(addToFavorites(productId));
  };

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  const applyFilter = () => {
    const { category, maxPrice } = filterCriteria;
    const filtered = products.filter(
      (product) =>
        (category === "" || product.category === category) &&
        (maxPrice === "" || product.price <= maxPrice)
    );
    products.map(item => console.log(item.price, maxPrice, item.category, category))
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  
  useEffect(() => {
    applyFilter();
  }, [products, filterCriteria]);

  return (
    <>
    <div className='filterPanel'>
       <div>
        <label>
          Category:
          <select name="category" className='form-control form-control-lg' value={filterCriteria.category} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>

          </select>
        </label>
        </div>
        <div>
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            className='form-control form-control-lg'
            value={filterCriteria.maxPrice}
            onChange={handleFilterChange}
          />
        </label>
        </div>
        </div>
    <div style={{ margin: '10px'}} className='card-container'>
    
     {filteredProducts.length === 0 ? (
        <p>No products matching the filter criteria.</p>
      ) : (
        filteredProducts.map((product) => (
     <Card className="card">

          <div key={product.id}>
            <img height={100} width={100} src={product.image}/>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            {console.log("cartItems.includes(product)",cartItems.includes(product))}
            {cartItems.length && cartItems.some(cartItem => cartItem.id === product.id) ? <></> : <button onClick={() => handleAddToCart(product)}>Add to Cart</button>}
            {favorites.includes(product.id) ? (
              <button onClick={() => handleRemoveFromFavorites(product.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => handleAddToFavorites(product.id)}>
                Add to Favorites
              </button>
            )}
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
      </Card>
        ))
      )}
    </div>
    </>

  );
}

export default Products;