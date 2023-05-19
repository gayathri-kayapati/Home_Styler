import { useState } from "react";
import { useContext } from "react";
import { BsSearch } from "react-icons/bs";

import { ProductsData } from "../../Contexts/ProductsDataProvider";
import "./searchBar.css";

export default function SearchBar() {
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
    <div className="searchBar">
      <input
        className="search"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      {/* {filterdProducts.map((product) => (
        <p>{product.title}</p>
      ))} */}
      <BsSearch />
    </div>
  );
}
