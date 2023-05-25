import { useContext } from "react";

import "./categories.css";
import { CategoriesData } from "../../Contexts/CategoriesDataProvider";
import CategoryCard from "../../Components/Categorycard/CategoryCard";

export default function CategoriesPage() {
  const { categories } = useContext(CategoriesData);

  return (
    <div className="container">
      {categories?.map((category) => (
        <CategoryCard category={category} />
      ))}
    </div>
  );
}
