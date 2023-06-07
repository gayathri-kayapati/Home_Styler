import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./productsList.css";
import { ProductsData } from "../../Contexts/ProductsDataProvider";
import ProductCard from "../../Components/ProductCard/ProductCard";
import FilteredByCategory from "../../Components/Filters/FilteredByCategory/FilteredByCategory";
import FilteredByRating from "../../Components/Filters/FilterdByRating/FilteredByRating";
import FilteredByPrice from "../../Components/Filters/FilteredByPrice/FilteredByPrice";

export default function ProductsListPage() {
  const navigate = useNavigate();
  const { products } = useContext(ProductsData);
  const redirect = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="page">
      <div className="productsListPage">
        <div>
          <FilteredByCategory />
          <FilteredByRating />
          <FilteredByPrice />
        </div>
        <div className="productsContainer">
          {products?.map((product) => (
            <div onClick={() => redirect(product.id)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
