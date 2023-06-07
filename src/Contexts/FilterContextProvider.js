import { createContext, useEffect, useState } from "react";
import { products } from "../backend/db/products";
import { categories } from "../backend/db/categories";

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const ratingChangeHandler = (e) => {
    if (e.target.checked) {
      const newFilteredProducts = filteredProducts.filter(
        (product) => product.rating >= e.target.value
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      const newFilteredProducts = [...filteredProducts];
      setFilteredProducts(newFilteredProducts);
    }
  };
  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);
  const sortByLowToHighPrice = () => {
    setSortedData(products.sort((a, b) => a.discountPrice - b.discountPrice));
  };
  const sortByHighToLowPrice = () => {
    setSortedData(products.sort((a, b) => b.discountPrice - a.discountPrice));
  };
  const categoryChangeHandler = (e, categoryName) => {
    if (e.target.checked) {
      const newCategories = [...category];
      newCategories.push(categoryName);
      setCategory(newCategories);
    } else {
      const newCategories = category.filter((item) => item !== categoryName);
      setCategory(newCategories);
    }
  };
  return (
    <div>
      <FilterContext.Provider
        value={{
          ratingChangeHandler,
          sortByLowToHighPrice,
          sortByHighToLowPrice,
          categoryChangeHandler,
          category,
          filteredProducts,
        }}
      >
        {children}
      </FilterContext.Provider>
    </div>
  );
}
