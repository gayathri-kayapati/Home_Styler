import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./productsList.css";
import { ProductsData } from "../../Contexts/ProductsDataProvider";
import ProductCard from "../../Components/ProductCard/ProductCard";
import FilteredByCategory from "../../Components/Filters/FilteredByCategory/FilteredByCategory";
import FilteredByRating from "../../Components/Filters/FilterdByRating/FilteredByRating";
import FilteredByPrice from "../../Components/Filters/FilteredByPrice/FilteredByPrice";
import { FilterContext } from "../../Contexts/FilterContextProvider";

export default function ProductsListPage() {
  const navigate = useNavigate();
  const { products } = useContext(ProductsData);
  const { category, rating, sortedBy } = useContext(FilterContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const redirect = (id) => {
    navigate(`/products/${id}`);
  };
  useEffect(() => {
    if (category.length > 0) {
      const temp = products.filter((product) =>
        category.includes(product.categoryName)
      );
      setFilteredProducts(temp);
    } else {
      setFilteredProducts(products);
    }
  }, [category]);
  useEffect(() => {
    const temp = [...filteredProducts];
    if (sortedBy === "asc") {
      temp.sort((a, b) => a.discountPrice - b.discountPrice);
    } else {
      temp.sort((a, b) => b.discountPrice - a.discountPrice);
    }
    setFilteredProducts(temp);
  }, [sortedBy]);

  useEffect(() => {
    if (rating > 0) {
      const temp = filteredProducts.filter(
        (product) => product.rating >= rating
      );
      setFilteredProducts(temp);
    }
  }, [rating]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  const handlingClearFilters = () => {
    let temp = [...filteredProducts];
    setFilteredProducts(temp);
  };
  return (
    <div className="page">
      <div className="productsListPage">
        <div>
          <div className="filtersHeading">
            <h3>Filters</h3>
            <button className="clearbtn" onClick={() => handlingClearFilters()}>
              Clear
            </button>
          </div>
          <FilteredByCategory />
          <FilteredByRating />
          <FilteredByPrice />
        </div>
        <div className="productsContainer">
          {filteredProducts?.map((product) => (
            <div onClick={() => redirect(product.id)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
