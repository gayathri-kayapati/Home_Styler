import { useContext } from "react";

import { FilterContext } from "../../../Contexts/FilterContextProvider";

export default function FilteredByPrice() {
  const { sortByHandler } = useContext(FilterContext);
  return (
    <div className="Container">
      <h4>Sort by Price</h4>
      <div>
        <input
          type="radio"
          id="1"
          name="price"
          value="asc"
          onChange={() => sortByHandler("asc")}
        />
        <label htmlFor="Low - High"> Low - High </label>
      </div>

      <div>
        <input
          type="radio"
          id="2"
          name="price"
          value="desc"
          onChange={() => sortByHandler("desc")}
        />
        <label htmlFor="High - Low"> High - Low </label>
      </div>
    </div>
  );
}
