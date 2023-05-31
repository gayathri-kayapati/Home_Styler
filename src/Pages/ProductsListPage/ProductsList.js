import { useContext } from "react";

import "./productsList.css";
import Navbar from "../../Components/Navbar/Navbar";
import { ProductsData } from "../../Contexts/ProductsDataProvider";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Footer/Footer";

export default function ProductsListPage() {
  const { products } = useContext(ProductsData);

  return (
    <div>
      <Navbar />
      <div className="productsContainer">
        {products?.map((product) => (
          <ProductCard product={product} className="product" />
        ))}
      </div>
      <Footer />
    </div>
  );
}
