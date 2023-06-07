import { useContext } from "react";
import "./filteredByRating.css";
import { FilterContext } from "../../../Contexts/FilterContextProvider";

export default function FilteredByRating() {
  const { ratingChangeHandler } = useContext(FilterContext);
  return (
    <div className="Container">
      <h4>Rating</h4>
      <div>
        <input
          type="radio"
          id="1"
          name="rating"
          value="1.0"
          onChange={(e) => ratingChangeHandler(e)}
        />
        <label htmlFor="1 star & above"> 1 star & above</label>
      </div>

      <div>
        <input
          type="radio"
          id="2"
          name="rating"
          value="2.0"
          onChange={(e) => ratingChangeHandler(e)}
        />
        <label htmlFor="2 star & above"> 2 star & above</label>
      </div>

      <div>
        <input
          type="radio"
          id="3"
          name="rating"
          value="3.0"
          onChange={(e) => ratingChangeHandler(e)}
        />
        <label htmlFor="3 star & above"> 3 star & above</label>
      </div>

      <div>
        <input
          type="radio"
          id="4"
          name="rating"
          value="4.0"
          onChange={(e) => ratingChangeHandler(e)}
        />
        <label htmlFor="4 star & above"> 4 star & above</label>
      </div>
    </div>
  );
}
