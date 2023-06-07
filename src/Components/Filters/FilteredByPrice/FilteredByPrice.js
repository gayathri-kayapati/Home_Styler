import { useContext } from "react";

import { FilterContext } from "../../../Contexts/FilterContextProvider";

export default function FilteredByPrice() {
  const { sortByLowToHighPrice, sortByHighToLowPrice } =
    useContext(FilterContext);
  return (
    <div className="Container">
      <h4>Sort by Price</h4>
      <div>
        <input
          type="radio"
          id="1"
          name="price"
          value="1"
          onChange={sortByLowToHighPrice}
        />
        <label htmlFor="Low - High"> Low - High </label>
      </div>

      <div>
        <input
          type="radio"
          id="2"
          name="price"
          value="2"
          onChange={sortByHighToLowPrice}
        />
        <label htmlFor="High - Low"> High - Low </label>
      </div>
    </div>
  );
}
