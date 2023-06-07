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
import WishlistContextProvider, {
  WishlistContext,
} from "./Contexts/WishlistContextProvider";
import FilterContextProvider, {
  FilterContext,
} from "./Contexts/FilterContextProvider";
// Call make Server
makeServer();
export { ProductsData };
export { CategoriesData };
export { CartContext };
export { WishlistContext };
export { FilterContext };

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ProductsDataProvider>
      <CategoriesDataProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <FilterContextProvider>
              <App />
            </FilterContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </CategoriesDataProvider>
    </ProductsDataProvider>
  </Router>
);
