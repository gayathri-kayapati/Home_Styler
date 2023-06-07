import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./categories.css";
import { CategoriesData } from "../../Contexts/CategoriesDataProvider";
import CategoryCard from "../../Components/Categorycard/CategoryCard";
import { FilterContext } from "../../Contexts/FilterContextProvider";

export default function CategoriesPage() {
  const { categories } = useContext(CategoriesData);
  const { categoryChangeHandler } = useContext(FilterContext);
  // const { categoryId } = useParams();
  const navigate = useNavigate();

  // const getFilterdCotegories = (categories, categoryId) =>
  //   categories.filter((category) => category.id === categoryId);
  // const filteredCategories = getFilterdCotegories(categories, categoryId);

  const redirect = (categoryName) => {
    categoryChangeHandler(true, categoryName);
    navigate(`/products`);
  };

  return (
    <div className="container">
      {categories?.map((category) => (
        <div key={category.id} onClick={() => redirect(category.categoryName)}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
}
