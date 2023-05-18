import { useState } from "react";
import { useContext } from "react";

import { ProductsData } from "../../Contexts/ProductsDataProvider";
import "./searchBar.css";

export function SearchBar() {
  const { products } = useContext(ProductsData);
  const [searchInput, setSearchInput] = useState("");
  //   const [filterdProducts, setFilterdProducts] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      const searchingproduct = products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      //   setFilterdProducts(searchingproduct);
      return searchingproduct;
    }
  };
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      {/* {filterdProducts.map((product) => (
        <p>{product.title}</p>
      ))} */}
    </div>
  );
}
