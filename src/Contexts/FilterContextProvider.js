import { createContext, useEffect, useState } from "react";
import { products } from "../backend/db/products";
import { categories } from "../backend/db/categories";

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState(0);
  const [sortedBy, setSortBy] = useState("");
  const ratingChangeHandler = (e) => {
    setRating(e);
  };
  const sortByHandler = (sortType) => {
    setSortBy(sortType);
  };
  const handlingClearFilters = () => {
    setSortBy("");
    setCategory([]);
    setRating(0);
  };

  const categoryChangeHandler = (flag, categoryName) => {
    if (flag) {
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
          categoryChangeHandler,
          sortByHandler,
          category,
          rating,
          sortedBy,
          handlingClearFilters,
        }}
      >
        {children}
      </FilterContext.Provider>
    </div>
  );
}
