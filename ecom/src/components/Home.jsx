import React from 'react'
import { Nav ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from './Products/Products';
import { useDispatch, useSelector } from "react-redux";
function Home() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.products.cart);
  const cartCount = cartItems.length;
  return (
    <>
    <Nav style={{background:'#0d6efd',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <h1>SHOPYY</h1>
    <div style={{display:'flex',alignItems:'center', gap:'20px'}}>
    {/* <p>Cart count: {cartCount}</p>  */}
  
    <div className="cart-icon" style={{gap: 'none'}}>
    {/* <i class="fa fa-cart-plus"></i> */}
    <i class="fa-solid fa-cart-shopping"></i>
      <span class="position-absolute translate-middle badge rounded-pill bg-danger">{cartCount}</span>
    </div>
    <Link to='/favorite'><i class="fa-brands fa-gratipay"></i></Link>
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
    <Link to='/cart'>cart</Link>
    <Link to='/login' onClick={() => localStorage.removeItem('loggedInUser')}>Logout</Link>
    </div>
    </Nav>
    <Products />
    </>
  )
}

export default Home