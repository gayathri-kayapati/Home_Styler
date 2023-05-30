import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import Home from "./Pages/HomePage/Home";
import ProductsListPage from "./Pages/ProductsListPage/ProductsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/productsList" element={<ProductsListPage />} />
      </Routes>
    </div>
  );
}

export default App;
