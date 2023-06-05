import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./categories.css";
import { CategoriesData } from "../../Contexts/CategoriesDataProvider";
import CategoryCard from "../../Components/Categorycard/CategoryCard";

export default function CategoriesPage() {
  const { categories } = useContext(CategoriesData);
  // const { categoryId } = useParams();
  const navigate = useNavigate();

  // const getFilterdCotegories = (categories, categoryId) =>
  //   categories.filter((category) => category.id === categoryId);
  // const filteredCategories = getFilterdCotegories(categories, categoryId);

  const redirect = () => {
    navigate(`/products/`);
  };

  return (
    <div className="container">
      {categories?.map((category) => (
        <div onClick={() => redirect()}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
}
