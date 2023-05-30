import { useContext } from "react";

import "./productsList.css";
import { ProductsData } from "../../Contexts/ProductsDataProvider";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function ProductsListPage() {
  const { products } = useContext(ProductsData);

  return (
    <div className="productsContainer">
      {products?.map((product) => (
        <ProductCard product={product} className="product" />
      ))}
    </div>
  );
}
