import { useContext } from "react";

import "./filteredbyCategory.css";
import { categories } from "../../../backend/db/categories";
import { FilterContext } from "../../../Contexts/FilterContextProvider";

export default function FilteredByCategory() {
  const { category, categoryChangeHandler } = useContext(FilterContext);
  return (
    <div className="Container">
      <h4>Categories</h4>
      {categories.map(({ id, categoryName }) => (
        <div key={id}>
          <label>
            <input
              type="checkbox"
              id={categoryName}
              name="category"
              value={categoryName}
              checked={category.includes(categoryName)}
              onChange={(e) =>
                categoryChangeHandler(e.target.checked, categoryName)
              }
            />{" "}
            {categoryName}
          </label>
        </div>
      ))}
    </div>
  );
}
