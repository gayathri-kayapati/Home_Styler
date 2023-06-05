import React from "react";
import { createRoot } from "react-dom/client";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsDataProvider, {
  ProductsData,
} from "./Contexts/ProductsDataProvider";
import CategoriesDataProvider, {
  CategoriesData,
} from "./Contexts/CategoriesDataProvider";
import CartContextProvider, {
  CartContext,
} from "./Contexts/CartContextProvider";
// Call make Server
makeServer();
export { ProductsData };
export { CategoriesData };
export { CartContext };

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ProductsDataProvider>
      <CategoriesDataProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoriesDataProvider>
    </ProductsDataProvider>
  </Router>
);
