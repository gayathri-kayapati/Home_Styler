import { useContext } from "react";
import "./filteredByRating.css";
import { FilterContext } from "../../../Contexts/FilterContextProvider";

export default function FilteredByRating() {
  const { rating, ratingChangeHandler } = useContext(FilterContext);
  return (
    <div className="Container">
      <h4>Rating</h4>
      <div>
        <input
          type="radio"
          id="1"
          name="rating"
          value={1}
          checked={rating === 1}
          onChange={(e) => ratingChangeHandler(1)}
        />
        <label htmlFor="1 star & above"> 1 star & above</label>
      </div>

      <div>
        <input
          type="radio"
          id="2"
          name="rating"
          value={2}
          checked={rating === 2}
          onChange={(e) => ratingChangeHandler(2)}
        />
        <label htmlFor="2 star & above"> 2 star & above</label>
      </div>

      <div>
        <input
          type="radio"
          id="3"
          name="rating"
          value={3}
          checked={rating === 3}
          onChange={(e) => ratingChangeHandler(3)}
        />
        <label htmlFor="3 star & above"> 3 star & above</label>
      </div>

      <div>
        <input
          type="radio"
          id="4"
          name="rating"
          value={4}
          checked={rating === 4}
          onChange={(e) => ratingChangeHandler(4)}
        />
        <label htmlFor="4 star & above"> 4 star & above</label>
      </div>
    </div>
  );
}
