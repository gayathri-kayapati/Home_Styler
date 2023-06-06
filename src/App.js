import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import Home from "./Pages/HomePage/Home";
import ProductsListPage from "./Pages/ProductsListPage/ProductsList";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import Cart from "./Pages/Cart/Cart";
import CartItems from "./Pages/CartItemsPage/CartItems";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListPage />} />
        {/*<Route path="/products/:categoryId" element={<ProductsListPage />} >*/}
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartItems" element={<CartItems />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
