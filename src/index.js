import React from "react";
import { createRoot } from "react-dom/client";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsDataProvider, {
  ProductsData,
} from "./Contexts/ProductsDataProvider";

// Call make Server
makeServer();
export { ProductsData };

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ProductsDataProvider>
      <App />
    </ProductsDataProvider>
  </Router>
);
