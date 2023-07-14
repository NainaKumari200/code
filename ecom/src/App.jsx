import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/login";
import Signup from "./components/Register/signup";
import Products from "./components/Products/Products";
import PrivateRoute from "../src/components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import ProductDetail from "../src/components/Products/ProductDetail";
import Favorites from "../src/components/Favorites";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route exact path="/product/:id" element={<ProductDetail />} />
          </Route>
          {/* <PrivateRoute exact path='/' component={Home} /> */}
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
