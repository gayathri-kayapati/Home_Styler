import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./productsList.css";
import Navbar from "../../Components/Navbar/Navbar";
import { ProductsData } from "../../Contexts/ProductsDataProvider";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Footer/Footer";

export default function ProductsListPage() {
  const navigate = useNavigate();
  const { products } = useContext(ProductsData);
  const redirect = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="page">
      <Navbar />
      <div className="productsContainer">
        {products?.map((product) => (
          <div onClick={() => redirect(product.id)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
