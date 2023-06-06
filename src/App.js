import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import Home from "./Pages/HomePage/Home";
import ProductsListPage from "./Pages/ProductsListPage/ProductsList";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import CartItems from "./Pages/CartItemsPage/CartItems";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsListPage />} />
          {/*<Route path="/products/:categoryId" element={<ProductsListPage />} >*/}
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
